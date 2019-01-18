import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import { fetchData as fetchProjectsData } from '../../../actions/projects';
import {
  scholasticPostSyncValidator as syncValidator,
  scholasticPostInitialValues as initialValues
} from '../../../auxiliary/redux-forms';
import Spinner from '../../generic/Spinner';

// const customSelect = props => {
//   console.log(props);
//
//   return (
//     <div className="select">
//       <select {...props.input} hidden>
//         {props.children}
//       </select>
//       <div className="select-styled">
//         {/* sss */}
//       </div>
//       <ul className="select-options">
//         {React.Children.map(props.children, (child, key) => {
//           console.log('child', child);
//           return (
//             <li>{child.props.children}</li>
//           )
//         })}
//       </ul>
//     </div>
//   );
// }

class CreateForm extends React.Component {
  componentDidMount() {
    if (!this.props.projects.length)
      this.props.fetchProjectsData();
  }

  render() {
    const { handleSubmit, projects, error } = this.props;

    if (!projects.length)
      return <Spinner />;

    return (
      <form className="scholastic-post__form" onSubmit={handleSubmit}>
        <Field
          name="project"
          component="select"
        >
          <option disabled value="">
            Choose the project..
          </option>
          {projects.map(project => (
            <option key={project._id} value={project._id}>{project.name}</option>
          ))}
        </Field>
        <Field
          name="date"
          type="date"
          component={renderField}
          label="Date"
        />
        <Field
          name="time"
          type="text"
          component={renderField}
          label="Time"
          placeholder="e.g. 7h 25m"
        />
        {error &&
          <div className="form__field">
            <strong className="form__submit-error">{error}</strong>
          </div>
        }
        <div className="form__field">
          <div className="left-side" />
          <button type="submit">Create</button>
        </div>
      </form>
    )
  }
}

const renderField = ({
  input,
  placeholder,
  label,
  type,
  meta: { active, touched, error }
}) => (
  <div className="form__field">
    <div className="left-side">
      <label
        className={classnames("input-label", { error: touched && error })}
        htmlFor={input.name}
      >
        {label}
      </label>
    </div>
    <div className="right-side">
      <div className="input-area">
        <input
          {...input}
          id={input.name}
          placeholder={placeholder ? placeholder : label}
          type={type}
        />
        <div className={classnames("underline", { active, error: touched && error })} />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  initialValues,
  projects: state.projects
});

const mapDispatchToProps = {
  fetchProjectsData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'scholasticPost',
    validate: syncValidator
  })(CreateForm)
);