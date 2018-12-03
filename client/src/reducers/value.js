import { Value } from '../actions';

const initialState = 0;

const value = (state = initialState, action) => {
  switch (action.type) {
    case Value.INC:
      return ++state;
    case Value.DEC:
      return --state;
    case Value.NUL:
      return initialState;
    default:
      return state;
  }
};

export default value;
