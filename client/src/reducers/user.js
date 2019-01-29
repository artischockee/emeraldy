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
    case User.LOGOUT_SUBMIT:
      return initialState;
    default:
      return state;
  }
};

export default user;

export const getSomething = (state, filter) => {
  switch (filter) {
    case 'a':
      return state;
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};
