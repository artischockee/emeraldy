import React from 'react';
import './sass/App.sass';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Body} />
        </Switch>
      </React.Fragment>
    );
  }
}

const Body = () => (
  <React.Fragment>
    <Header />
    <Main />
    <Footer />
  </React.Fragment>
)

export default App;
