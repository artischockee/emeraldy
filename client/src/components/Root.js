import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import App from './App';
import Login from './login/Login';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

const Routes = withRouter(({ location }) => (
  <TransitionGroup component={null}>
    <CSSTransition
      key={location.key}
      timeout={300}
      classNames="fade"
    >
      <section className="route-section">
        <Switch location={location}>
          <Route path="/login" component={Login} />
          {/* <Route path="/resetPassword/:token" component={Login} /> */}
          <Route path="/" component={App} />
        </Switch>
      </section>
    </CSSTransition>
  </TransitionGroup>
));

export default Root;
