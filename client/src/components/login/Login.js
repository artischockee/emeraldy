import './login.sass';
import './login_media.sass';
import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { timeout } from '../../auxiliary';
import FormComponent from './FormComponent';
import SuccessComponent from './SuccessComponent';

class Login extends React.Component {
  static transitionTimeout = 1000; // in ms

  redirectToApplication = async () => {
    await timeout(1000);
    this.props.history.push('/');
  };

  render() {
    const { isLoggedSuccessfully } = this.props;

    return (
      <section className="login">
        <div className="login__container">
          <CSSTransition
            classNames={{
              exit: 'login__component_exit',
              exitActive: 'login__component_exit-active',
              exitDone: 'login__component_exit-done'
            }}
            in={!isLoggedSuccessfully}
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
            in={isLoggedSuccessfully}
            mountOnEnter
            onEntered={this.redirectToApplication}
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
  isLoggedSuccessfully: state.user.isLoggedIn
});

export default connect(mapStateToProps)(Login);
