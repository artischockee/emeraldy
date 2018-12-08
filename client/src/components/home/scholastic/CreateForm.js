import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const CreateForm = ({ handleSubmit }) => (
  <form className="scholastic-post__form" onSubmit={handleSubmit}>
    <Field
      name="date"
      type="date"
      component={renderField}
      label="Date"
    />
    <Field
      name="hours"
      type="number"
      min="0"
      max="24"
      component={renderField}
      label="Hours"
    />
    <Field
      name="minutes"
      type="number"
      min="0"
      max="59"
      component={renderField}
      label="Minutes"
    />
    <div className="form__field">
      <div className="left-side" />
      <button type="submit">Submit</button>
    </div>
  </form>
);

const renderField = ({
  input,
  label,
  type,
  min,
  max,
  meta: { active, touched, error }
}) => (
  <div className="form__field">
    <div className="left-side">
      <label className="input-label" htmlFor={input.name}>{label}</label>
    </div>
    <div className="right-side">
      <div className="input-area">
        <input {...input} id={input.name} placeholder={label} type={type} min={min} max={max} />
        <div className={classnames("underline", { active })} />
      </div>
      {/* {touched &&
        (error && <span>{error}</span>)} */}
    </div>
  </div>
);

const validate = values => {
  const errors = {}

  if (!values.date)
    errors.date = 'Required';

  if (!values.hours)
    errors.hours = 'Required';

  if (!values.minutes)
    errors.minutes = 'Required';

  // console.log(values);

  return errors
};

export default reduxForm({ form: 'scholasticPost', validate })(CreateForm);