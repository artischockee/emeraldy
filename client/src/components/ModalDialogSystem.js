import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { timeout } from '../auxiliary';
import { closeDialog } from '../actions';
import Button from './generic/Button';

class ModalDialogSystem extends React.Component {
  render() {
    if (!this.props.dialog)
      return null;

    switch (this.props.dialog.name) {
      case 'Delete Dialog':
        return (
          <DeleteDialog
            id={this.props.dialog.itemId}
            onConfirm={this.props.dialog.callback}
            onClose={this.props.closeDialog}
          />
        )
      default:
        return null;
    }
  }
}

class DeleteDialog extends React.Component {
  state = {
    isLoading: true
  };

  blindRef = React.createRef();

  handleClick = (event) => {
    if (event.target.isSameNode(this.blindRef.current))
      this.handleUnmount();
  };

  async componentDidMount() {
    await timeout();
    await this.setState({ isLoading: false });

    document.addEventListener('click', this.handleClick);
  }

  handleConfirm = async () => {
    this.props.onConfirm();
    await this.setState({ isLoading: true });
    await timeout(300);
    this.props.onClose();
  };

  handleUnmount = async () => {
    await this.setState({ isLoading: true });
    await timeout(300);

    this.props.onClose();
  };

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className={classnames("dialog-fullscreen-blind", { isLoading })} ref={this.blindRef}>
        <div className={classnames("dialog", { isLoading })}>
          <h4 className="dialog__header">Confirm an action</h4>
          <section className="dialog__body">
            <p className="dialog__message">
              Are u sure you want to delete object id {this.props.id}?
            </p>
          </section>
          <section className="dialog__buttons">
            <Button
              className="dialog__button dialog__button--confirm"
              onClick={this.handleConfirm}
              content="Yes"
            />
            <Button
              className="dialog__button"
              onClick={this.handleUnmount}
              content="No"
            />
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dialog: state.modalDialog
});

const mapDispatchToProps = {
  closeDialog
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalDialogSystem);