import '../sass/App.sass';
import React from 'react';
import ControlPanel from './control-panel';
import Header from './header/Header';
import Main from './Main';
import Footer from './Footer';
import ModalDialogSystem from './ModalDialogSystem';

const App = () => (
  <React.Fragment>
    <ModalDialogSystem />
    <ControlPanel />
    <div className="main-part" style={{ display: 'flex', flexDirection: 'column', flex: 'auto' }}>
      <Header />
      <main style={{
        backgroundColor: 'lightgray',
        flex: 'auto'
      }}>
        <p>test</p>
      </main>
      {/* <Main /> */}
      {/* <Footer /> */}
    </div>
  </React.Fragment>
);

export default App;
