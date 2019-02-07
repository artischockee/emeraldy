import './Notification.sass';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { unmountNotification } from '../../actions/notificationSystem';
import { NotificationTypes } from '../../auxiliary/notification';
import { timeout } from '../../auxiliary';
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
    isHidden: true,
    shouldUnmountByTime: true
  };

  static unmountDelay = 5000;
  static fadeInDuration = 200;

  cancelAutoUnmount = () => {
    if (!this.state.shouldUnmountByTime)
      return;

    this.setState({ shouldUnmountByTime: false });

    clearTimeout(this.autoUnmountTimeout);
  }

  handleUnmount = async () => {
    this.setState({ isHidden: true });

    await timeout(Notification.fadeInDuration);

    this.props.unmountNotification(this.props.id);
  }

  async componentDidMount() {
    await timeout(Notification.fadeInDuration);

    this.setState({ isHidden: false });

    this.autoUnmountTimeout = setTimeout(() => {
      if (this.state.shouldUnmountByTime)
        this.handleUnmount();
    }, Notification.unmountDelay);
  }

  componentWillUnmount() {
    clearTimeout(this.autoUnmountTimeout);
  }

  render() {
    const { isHidden } = this.state;
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
          { "notification_is-hidden": isHidden }
        )}
        onMouseEnter={this.cancelAutoUnmount}
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
            onClick={this.handleUnmount}
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

Notification.propTypes = {
  id: PropTypes.string.isRequired,
  mainText: PropTypes.arrayOf(PropTypes.string),
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

const actions = {
  unmountNotification
};

export default connect(null, actions)(Notification);
