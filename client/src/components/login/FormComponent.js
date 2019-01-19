import React from 'react';
import ComponentWrapper from './ComponentWrapper';
import LoginForm from './LoginForm';

class FormComponent extends React.Component {
  static headerStyle = {
    backgroundImage: 'url(images/login/header-background.jpg)'
  };

  render() {
    return (
      <ComponentWrapper>
        <div className="login__header" style={FormComponent.headerStyle}>
          <h1 className="login__title">Sign in</h1>
        </div>
        <LoginForm />
      </ComponentWrapper>
    );
  }
}

export default FormComponent;