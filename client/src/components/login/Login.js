import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
// import Link from '../generic/Link';

class Login extends React.Component {
  state = {
    result: null
  }

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
        <div className="section-wrapper">
          <div className="login__container">
            <div
              className="login__wallpaper"
              // style={{ backgroundImage: "url(images/login/polygon.jpg)" }}
            >
              <h1 className="login__title">Sign in</h1>
            </div>
            {/* <Link to="/" mainPage>Home</Link> */}
            <LoginForm onSubmit={this.onLogIn} />
          </div>
        </div>
      </section>
    );
  }
}

const validate = values => {
  const errors = {}

  if (!values.login)
    errors.login = 'Required';

  // console.log(values);

  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { active, touched, error }
}) => (
  <div className="form__field">
    <div className="left-side">
      <label className="input-label" htmlFor={input.name}>{label}</label>
    </div>
    <div className="right-side">
      <div className="input-area">
        <input {...input} id={input.name} placeholder={label} type={type} />
        <div className={classnames("underline", { active })} />
      </div>
      {/* {touched &&
        (error && <span>{error}</span>)} */}
    </div>
  </div>
)

const LoginForm = reduxForm({ form: 'login', validate })(
  ({ handleSubmit }) => (
    <form className="login__form" onSubmit={handleSubmit}>
      <Field
        name="login"
        type="text"
        component={renderField}
        label="Login"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      <div className="form__field">
        <div className="left-side"></div>
        <input type="checkbox" />
        <a href="/">Forgot password?</a>
      </div>
      <div className="form__field">
        <div className="left-side"></div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
)

export default Login;