import React from 'react';
import classNames from 'classnames';
import LoginForm from './LoginForm';
import { timeout } from '../../auxiliary/timeout';

class FormComponent extends React.Component {
  static headerStyle = {
    backgroundImage: 'url(images/login/header-background.jpg)'
  };

  render() {
    const { shouldTranslate } = this.props;

    return (
      <div className={classNames(
        "login__component",
        { "login__component_is-translating": shouldTranslate }
      )}>
        <div className="login__header" style={FormComponent.headerStyle}>
          <h1 className="login__title">Sign in</h1>
        </div>
        <LoginForm />
      </div>
    );
  }
}

export default FormComponent;