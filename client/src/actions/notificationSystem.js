import uuid from 'uuid/v4';

const ENTITY = 'NotificationSystem/';

export const NotificationSystem = {
  MOUNT_NOTIFICATION: `${ENTITY}MOUNT_NOTIFICATION`,

};

export const mountNotification = (data) => ({
  type: NotificationSystem.MOUNT_NOTIFICATION,
  id: uuid(),
  payload: data
});
