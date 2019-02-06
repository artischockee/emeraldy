import './NotificationSystem.sass';
import React from 'react';
import { connect } from 'react-redux';
import { getNotifications } from '../../reducers/notifications';
import Notification from './Notification';

class NotificationSystem extends React.Component {
  render() {
    const { notifications } = this.props;

    return (
      <div className="notifications-container">
        {notifications && notifications.map((notification) => (
          <Notification
            key={notification.id}
            {...notification}
            // deleteNotification={() => deleteNotification(notification.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  notifications: getNotifications(state)
});


export default connect(mapStateToProps)(NotificationSystem);
