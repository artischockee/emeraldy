import { NotificationSystem } from '../actions/notificationSystem';

const initialState = [];

const MaxNotificationsAmount = 4;

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case NotificationSystem.MOUNT_NOTIFICATION:
      return [
        ...(
          state.length >= MaxNotificationsAmount
            ? state.slice(1)
            : state
        ), {
          id: action.id,
          ...action.payload
        }
      ];
    default:
      return state;
  }
};

export default notifications;

export const getNotifications = (state) => state.notifications;
