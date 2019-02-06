import './Main.sass';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import Stock from '../stock';
import Page404 from '../page404';

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Page404} />
          <Route path="/stock" component={Stock} />
          <Route path="/charts" component={Page404} />
          <Route component={Page404} />
        </Switch>
      </main>
    );
  }
}

export default Main;
