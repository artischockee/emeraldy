import { User } from '../actions';

const initialState = {
  isLoggedIn: false,
  login: null,
  firstName: null,
  lastName: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case User.LOGIN_SUCCESSFUL:
      return Object.assign({}, state, {
        isLoggedIn: true,
        login: action.payload.login,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      });
    default:
      return state;
  }
};

export default user;
