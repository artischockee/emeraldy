import React from 'react';
import { Provider, connect } from 'react-redux';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { isLoggedIn } from '../reducers/user';
import App from './App';
import Login from './login/Login';
import NotificationSystem from './notification-system';

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
        <NotificationSystem />
        <Switch location={location}>
          <Route path="/login" component={Login} />
          {/* <Route path="/resetPassword/:token" component={Login} /> */}
          <Route path="/" component={LoginTrigger} />
        </Switch>
      </section>
    </CSSTransition>
  </TransitionGroup>
));

const mapStateToLoginTriggerProps = (state) => ({
  isLoggedIn: isLoggedIn(state)
});

const LoginTrigger = connect(mapStateToLoginTriggerProps)(
  ({ isLoggedIn }) => (
    isLoggedIn
      ? <App />
      : <Redirect to="/login" />
  )
);

export default Root;
