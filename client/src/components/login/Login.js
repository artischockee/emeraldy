import './Login.sass';
import React from 'react';
import { connect } from 'react-redux';
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
      const { login } = body;
      this.setState({ result: login });
    } else {
      const { message } = body;
      this.setState({ result: message });
    }
  }

  render() {
    const { submitSucceeded } = this.props;

    return (
      <section className="login">
        <div className="login__container">
          <FormComponent shouldTranslate={submitSucceeded} />
          {submitSucceeded &&
            <SuccessComponent />
          }
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  submitSucceeded: state.form['login'] && state.form['login'].submitSucceeded
});

export default connect(mapStateToProps)(Login);