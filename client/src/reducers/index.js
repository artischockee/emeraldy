import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import scholasticEditEntry from './scholasticEditEntry';
import projects from './projects';
import modalDialog from './modalDialog';
import user, * as fromUser from './user';

export default combineReducers({
  scholasticEditEntry,
  projects,
  modalDialog,
  user,
  form: formReducer
});

export const getSomething = (state, filter) =>
  fromUser.getSomething(state.user, filter);
