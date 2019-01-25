import { User } from '../actions';

const initialState = {
  isLoggedIn: false,
  isLoginFailed: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case User.LOGIN_SUCCESSFUL:
      return Object.assign({}, state, {
        isLoggedIn: true
      });
    case User.LOGIN_FAILED:
      return Object.assign({}, state, {
        isLoginFailed: true
      });
    default:
      return state;
  }
};

export default user;
