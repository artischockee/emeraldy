import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import scholasticEditEntry from './scholasticEditEntry';
import projects from './projects';
import modalDialog from './modalDialog';

export default combineReducers({
  scholasticEditEntry,
  projects,
  modalDialog,
  form: formReducer
});
