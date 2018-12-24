import React from 'react';
import './sass/App.sass';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ModalDialogSystem from './components/ModalDialogSystem';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Body} />
        </Switch>
      </Router>
    );
  }
}

const Body = () => (
  <React.Fragment>
    <ModalDialogSystem />
    <Header />
    <Main />
    <Footer />
  </React.Fragment>
)

export default App;
