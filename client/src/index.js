import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import rootReducer from './reducers';
import App from './App';
import Login from './components/login/Login';
import * as serviceWorker from './serviceWorker';
import { timeout } from './auxiliary/timeout';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const rootElement = document.getElementById('root');

class Root extends React.Component {
  async componentDidMount() {
    await timeout(300);
    rootElement.classList.add("visible");
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            {/* <Route path="/resetPassword/:token" component={Login} /> */}
            <Route path="/" component={App} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, rootElement);

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
