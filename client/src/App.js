import './sass/App.sass';
import React from 'react';
import Main from './components/Main';
import Footer from './components/Footer';
import ModalDialogSystem from './components/ModalDialogSystem';

const App = () => (
  <React.Fragment>
    <ModalDialogSystem />
    <Main />
    <Footer />
  </React.Fragment>
);

export default App;