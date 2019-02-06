export const NotificationTypes = {
  EXCLAMATION: 'EXCLAMATION',
  INFORMATION: 'INFORMATION',
  QUESTION: 'QUESTION'
};

export const createNotification = (type, title, subtitle, mainText = null) => ({
  type, title, subtitle, mainText
});
