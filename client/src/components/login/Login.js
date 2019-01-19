import './Login.sass';
import './Login_media.sass';
import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { timeout } from '../../auxiliary';
import FormComponent from './FormComponent';
import SuccessComponent from './SuccessComponent';

class Login extends React.Component {
  onLogIn = async (data) => {
    return;

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ })
    });

    const body = await response.json();

    console.log(body);

    if (response.ok) {

    }
  }

  static transitionTimeout = 1000; // in ms

  performLogIn = async () => {
    await timeout(500);

    console.log('log in process..');
  };

  render() {
    const { submitSucceeded } = this.props;

    return (
      <section className="login">
        <div className="login__container">
          <CSSTransition
            classNames={{
              exit: 'login__component_exit',
              exitActive: 'login__component_exit-active',
              exitDone: 'login__component_exit-done'
            }}
            in={!submitSucceeded}
            timeout={Login.transitionTimeout}
          >
            <FormComponent />
          </CSSTransition>
          <CSSTransition
            classNames={{
              enter: 'login__component_enter',
              enterActive: 'login__component_enter-active',
              enterDone: 'login__component_enter-done'
            }}
            in={submitSucceeded}
            mountOnEnter
            onEntered={this.performLogIn}
            timeout={Login.transitionTimeout}
          >
            <SuccessComponent />
          </CSSTransition>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  submitSucceeded: state.form['login'] && state.form['login'].submitSucceeded
});

export default connect(mapStateToProps)(Login);