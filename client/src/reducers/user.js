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

export const hasFullName = (state) => (
  state.user.firstName && state.user.lastName
);

export const getName = (state) => ({
  first: state.user.firstName,
  last: state.user.lastName
});

export const getLogin = (state) => state.user.login;
export const isLoggedIn = (state) => state.user.isLoggedIn;
