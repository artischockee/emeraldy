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
    case NotificationSystem.UNMOUNT_NOTIFICATION:
      return state.filter(ntf => ntf.id !== action.id);
    default:
      return state;
  }
};

export default notifications;

export const getNotifications = (state) => state.notifications;
