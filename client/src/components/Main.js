import './Main.sass';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Scholastic from './home/scholastic/Scholastic';
import About from './about/About';
import Contact from './contact/Contact';
import Crud from './crud/Crud';

const Main = () => (
  <main className="main">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/scholastic" component={Scholastic} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/crud-test" component={Crud} />
      <Route component={Error404} />
    </Switch>
  </main>
);

const Error404 = () => <h1>Page not found!</h1>;

export default Main;