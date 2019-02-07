import { stopSubmit } from 'redux-form';
import { loginFormName } from '../auxiliary/redux-forms';
import {
  NotificationTypes,
  createNotification
} from '../auxiliary/notification';
import { mountNotification } from './notificationSystem';

const ENTITY = 'User/';

export const User = {
  LOGIN_SUCCESSFUL: `${ENTITY}LOGIN_SUCCESSFUL`,
  LOGOUT_SUBMIT: `${ENTITY}LOGOUT_SUBMIT`
};

const acceptLogin = (data) => ({
  type: User.LOGIN_SUCCESSFUL,
  payload: data
});

const acceptLogout = () => ({
  type: User.LOGOUT_SUBMIT
});

export const submitLogout = () => (dispatch) => {
  dispatch(acceptLogout());

  const data = createNotification(
    NotificationTypes.INFORMATION,
    'Sign out',
    'You have successfully logged out'
  );
  
  dispatch(mountNotification(data));
};

export const submitLogin = (data) => (dispatch) => {
  const apiLogin = '/api/login';

  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  return fetch(apiLogin, init)
    .then(
      response => response.json(),
      error => console.error(error)
    )
    .then(data => {
      if (data.hasError)
        return dispatch(stopSubmit(loginFormName, data));
      else
        return dispatch(acceptLogin(data));
    });
};
