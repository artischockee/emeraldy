import { Scholastic } from '../actions';

const initialState = {};

const scholasticEditEntry = (state = initialState, action) => {
  switch (action.type) {
    case Scholastic.LOAD_DATA:
      return Object.assign({}, state, action.payload);
    case Scholastic.UNLOAD_DATA:
      return initialState;
    default:
      return state;
  }
};

export default scholasticEditEntry;
