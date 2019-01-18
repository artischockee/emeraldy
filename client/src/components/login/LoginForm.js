import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';

const validate = (values) => {
  const errors = {}

  if (!values.login)
    errors.login = 'Required';

  // console.log(values);

  return errors
};

const LoginForm = reduxForm({ form: 'login', validate })(
  ({ handleSubmit }) => (
    <form className="login__form" onSubmit={handleSubmit}>
      <Field
        component={dataInputField}
        label="Login"
        name="login"
        type="text"
      />
      <Field
        component={dataInputField}
        label="Password"
        name="password"
        type="password"
      />
      <Field
        component={rememberMeField}
        flex
        label="Remember me"
        name="rememberMe"
        type="checkbox"
      >
        <a href="/" className="_tmp-anchor-style">
          Forgot password?
        </a>
      </Field>
      <FormFieldWrapper>
        <Fragment key="rightSide">
          <button className="button button_rounded" type="submit">Login</button>
        </Fragment>
      </FormFieldWrapper>
    </form>
  )
);

const dataInputField = ({
  input,
  label,
  type,
  meta: { active, touched, error }
}) => (
  <FormFieldWrapper>
    <Fragment key="leftSide">
      <label className="label" htmlFor={input.name}>{label}</label>
    </Fragment>
    <Fragment key="rightSide">
      <div className="input-area">
        <input
          {...input}
          className="input-area__input"
          id={input.name}
          placeholder={label}
          type={type}
        />
        <div className={classNames(
          "input-area__underline",
          { "input-area__underline_active": active }
        )} />
      </div>
      {/* {touched &&
        (error && <span>{error}</span>)} */}
    </Fragment>
  </FormFieldWrapper>
);

const rememberMeField = ({
  children,
  flex,
  input,
  label,
  type,
  meta: { active, touched, error }
}) => (
  <FormFieldWrapper flexRightSide={flex}>
    <Fragment key="rightSide">
      <div className="checkbox-area">
        <div className={classNames(
          "checkbox-area__container",
          { "checkbox-area__container_checked": input.value }
        )}>
          <input
            {...input}
            className="checkbox-area__input"
            id={input.name}
            type={type}
          />
        </div>
        <label className="label label_for-checkbox" htmlFor={input.name}>{label}</label>
      </div>
      {children}
    </Fragment>
  </FormFieldWrapper>
);

const FormFieldWrapper = ({ children, flexRightSide }) => {
  if (!children)
    return null;

  const childrenIsArray = Array.isArray(children);

  const renderByKey = (keyName) => (
    childrenIsArray
      ? children.map(({ key, props }) => key === keyName ? props.children : null)
      : children.key === keyName ? children.props.children : null
  );

  return (
    <div className="login__form-field">
      <div className="form-field__left-side">
        {renderByKey('leftSide')}
      </div>
      <div className={classNames(
        "form-field__right-side",
        { "form-field__right-side_flex": flexRightSide }
      )}>
        {renderByKey('rightSide')}
      </div>
    </div>
  );
};

export default LoginForm;