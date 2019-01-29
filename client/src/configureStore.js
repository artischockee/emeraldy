import throttle from 'lodash/throttle';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import rootReducer from './reducers';

const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
  );

  store.subscribe(throttle(() => {
    saveState({
      user: store.getState().user
    });
  }, 2500));

  return store;
};

export default configureStore;
