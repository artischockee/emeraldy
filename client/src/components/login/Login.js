import './Login.sass';
import React from 'react';
import LoginForm from './LoginForm';

class Login extends React.Component {
  state = {
    result: null
  }

  static headerStyle = {
    backgroundImage: 'url(images/login/header-background.jpg)'
  };

  onLogIn = async (data) => {
    // {login: "", password: ""}

    const { login, password } = data;

    if (login === '' || password === '')
      return;

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ login, password })
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
    return (
      <section className="login">
        <div className="login__container">
          <div className="login__header" style={Login.headerStyle}>
            <h1 className="login__title">Sign in</h1>
          </div>
          <LoginForm onSubmit={this.onLogIn} />
        </div>
      </section>
    );
  }
}

export default Login;