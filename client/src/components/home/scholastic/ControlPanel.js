import React from 'react';
import CreateForm from './CreateForm';
import classnames from 'classnames';

class ControlPanel extends React.Component {
  render() {
    return (
      <section className="control-panel">
        <Dropdown className="control" text="Create Entry..">
          <CreateForm onSubmit={this.props.onEntryCreate} />
        </Dropdown>
        <button className="control button" onClick={this.props.onTableCreate}>Create table</button>
        <button className="control button danger" onClick={this.props.onTableDrop}>Drop table</button>
        <button className="control button f-right" onClick={this.props.onRefreshData}>Refresh</button>
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
          <button
            ref={this.buttonRef}
            className={classnames(className, "button")}
            onClick={this.onButtonClick}
          >
            {this.props.text}
          </button>
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