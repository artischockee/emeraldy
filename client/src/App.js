import React from 'react';
import './sass/App.sass';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Scholastic from './components/home/scholastic/Scholastic';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Crud from './components/crud/Crud';
import ModalDialogSystem from './components/ModalDialogSystem';

import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ModalDialogSystem />
        <Header />
        <main className="main">
          <div className="section-wrapper">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/scholastic" component={Scholastic} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/crud-test" component={Crud} />
              <Route component={Error404} />
            </Switch>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

const Error404 = () => <h1>Page not found!</h1>;

export default App;
