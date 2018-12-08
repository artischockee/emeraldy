import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import scholasticEditEntry from './scholasticEditEntry';

export default combineReducers({
  scholasticEditEntry,
  form: formReducer
});
