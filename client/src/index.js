import './index.css';
import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';
import Root from './components/Root';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);

document.addEventListener('keyup', (e) => {
  if (e.key === 'Control') {
    console.group("Store state")
    console.log(store.getState())
    console.groupEnd()
  }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
