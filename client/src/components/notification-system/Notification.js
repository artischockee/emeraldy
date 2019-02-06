import './Notification.sass';
import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NotificationTypes } from '../../auxiliary/notification';
import { timeout } from '../../auxiliary/timeout';
import {
  ExclamationSign,
  CheckedSign,
  QuestionSign,
  RemoveSymbol
} from '../svg';
import Button from '../generic/Button';

const { EXCLAMATION, INFORMATION, QUESTION } = NotificationTypes;

class Notification extends React.PureComponent {
  state = {
      hidden: true,
      willUnmountByTime: true
  };

  cancelAutoRemove = () => {
    if (!this.state.willUnmountByTime)
      return;

    this.setState({ willUnmountByTime: false });

    clearTimeout(this.autoUnmountTimeout);
  }

  handleDelete = async () => {
    this.setState({ hidden: true });

    await timeout(200);

    this.props.deleteNotification();
  }

  async componentDidMount() {
    await timeout(200);

    this.setState({ hidden: false });

    this.autoUnmountTimeout = setTimeout(() => {
      if (this.state.willUnmountByTime)
        this.handleDelete();
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.autoUnmountTimeout);
  }

  render() {
    const { hidden } = this.state;
    const { type, title, subtitle, mainText } = this.props;

    let SVGIcon = null;

    switch (type) {
      case EXCLAMATION:
        SVGIcon = ExclamationSign;
        break;
      case INFORMATION:
        SVGIcon = CheckedSign;
        break;
      case QUESTION:
        SVGIcon = QuestionSign;
        break;
      default:
        throw new Error(`An unexpected notification type ${type} has been met`);
    }

    const headerStyle = type.toLowerCase();

    return (
      <div
        className={classNames(
          "notification",
          { "notification_is-hidden": hidden }
        )}
        onMouseEnter={this.cancelAutoRemove}
      >
        <header
          className={classNames(
            "notification__header",
            `notification__header_${headerStyle}`
          )}
        >
          <SVGIcon className="notification__svg" />
          <div className="notification__header-text-area">
            <h4 className="heading notification__heading">
              {title}
            </h4>
            <p className="notification__subheading">
              {subtitle}
            </p>
          </div>
          <Button
            className="button button_transparent notification__button"
          >
            <RemoveSymbol
              className="notification__svg notification__svg_small"
            />
          </Button>
        </header>
        {mainText &&
          <main className="notification__main">
            {mainText.map((paragraph, index) => (
              <p key={index} className="notification__text">
                {paragraph}
              </p>
            ))}
          </main>
        }
      </div>
    );
  }
}

// Notification.propTypes = {
//     deleteNotification: PropTypes.func.isRequired,
//     message: PropTypes.string.isRequired
// };

export default Notification;
