import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import App from './App';
import Login from './components/login/Login';

const Root = ({ location }) => (
  <TransitionGroup component={null}>
    <CSSTransition
      key={location.key}
      timeout={{ enter: 300, exit: 300 }}
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
);

export default withRouter(Root);