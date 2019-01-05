import React from 'react';
import classnames from 'classnames';
import Button from '../../generic/Button';
import CreateForm from './CreateForm';

class ControlPanel extends React.Component {
  render() {
    return (
      <section className="control-panel">
        <Dropdown className="control" text="Create entry..">
          <CreateForm onSubmit={this.props.onEntryCreate} />
        </Dropdown>
        <Button
          className="control button"
          onClick={this.props.onTableCreate}
          content="Create table"
        />
        <Button
          className="control button danger"
          onClick={this.props.onTableDrop}
          content="Drop table"
        />
        <Dropdown className="control" text="Add new project..">
          <CreateForm onSubmit={this.props.onProjectCreate} />
        </Dropdown>
        <Button
          className="control button f-right"
          onClick={this.props.onRefreshData}
          content="Refresh"
        />
      </section>
    )
  }
}

class Dropdown extends React.Component {
  state = {
    isContentVisible: false
  };

  buttonRef = React.createRef();
  containerRef = React.createRef();

  trackMouseClick = (event) => {
    if (!this.state.isContentVisible)
      return;

    if (
      [
        this.containerRef.current,
        this.buttonRef.current
      ].every(ref => !ref.contains(event.target))
      && this.state.isContentVisible
    ) {
      this.setState({ isContentVisible: false });
    }
  };

  componentDidMount() {
    document.addEventListener('click', this.trackMouseClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.trackMouseClick);
  }

  onButtonClick = () => {
    const isContentVisible = !this.state.isContentVisible;

    this.setState({ isContentVisible });
  }

  render() {
    const { inline, className } = this.props;

    return (
      <div className={classnames("dropdown", className, { inline })}>
        <Button
          reference={this.buttonRef}
          className={classnames(className, "button")}
          onClick={this.onButtonClick}
          content={this.props.text}
        />
        {this.state.isContentVisible &&
          <div className="dropdown__container" ref={this.containerRef}>
            {this.props.children}
          </div>
        }
      </div>
    );
  }
}

export default ControlPanel;