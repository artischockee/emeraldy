import uuid from 'uuid/v4';

const ENTITY = 'NotificationSystem/';

export const NotificationSystem = {
  MOUNT_NOTIFICATION: `${ENTITY}MOUNT_NOTIFICATION`,
  UNMOUNT_NOTIFICATION: `${ENTITY}UNMOUNT_NOTIFICATION`
};

export const mountNotification = (data) => ({
  type: NotificationSystem.MOUNT_NOTIFICATION,
  id: uuid(),
  payload: data
});

export const unmountNotification = (id) => ({
  type: NotificationSystem.UNMOUNT_NOTIFICATION,
  id
});
