import '../sass/App.sass';
import React from 'react';
import ControlPanel from './control-panel';
import Header from './header';
import Main from './main';
import ModalDialogSystem from './ModalDialogSystem';

const App = () => (
  <React.Fragment>
    <ModalDialogSystem />
    <ControlPanel />
    <div className="main-part" style={{ display: 'flex', flexDirection: 'column', flex: 'auto' }}>
      <Header />
      <Main />
    </div>
  </React.Fragment>
);

export default App;
