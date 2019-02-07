import './NotificationSystem.sass';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNotifications } from '../../reducers/notifications';
import Notification from './Notification';

const NotificationSystem = ({ notifications }) => (
  <div className="notifications-container">
    {notifications && notifications.map((notification) => (
      <Notification key={notification.id} {...notification} />
    ))}
  </div>
);

NotificationSystem.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      mainText: PropTypes.arrayOf(PropTypes.string),
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    })
  ).isRequired
};

const mapStateToProps = (state) => ({
  notifications: getNotifications(state)
});

export default connect(mapStateToProps)(NotificationSystem);
