import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Crud from './crud/Crud';

const Main = () => (
  <main className="main">
    <div className="section-wrapper">
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/crud-test" component={Crud} />
    </div>
  </main>
);

export default Main;