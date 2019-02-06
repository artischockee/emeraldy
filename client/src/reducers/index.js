import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import scholasticEditEntry from './scholasticEditEntry';
import projects from './projects';
import modalDialog from './modalDialog';
import notifications from './notifications';
import user from './user';

export default combineReducers({
  modalDialog,
  projects,
  notifications,
  scholasticEditEntry,
  user,
  form: formReducer
});
