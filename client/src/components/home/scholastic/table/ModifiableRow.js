import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  scholasticPostInitialValues as initialValues
} from '../../../../auxiliary/redux-forms';
import { unloadData } from '../../../../actions';
import { fetchData } from '../../../../actions/projects';
import { findProjectById, filterProjectsById } from '../../../../reducers/projects';

class ModifiableRow extends React.Component {
  componentDidMount() {
    if (!this.props.projects.length)
      this.props.fetchProjects();
  }

  handleSave = () => {
    this.props.handleSubmit();
    this.props.onEditCancel();
  };

  handleCancel = () => {
    this.props.unloadData();
    this.props.onEditCancel();
  };

  render() {
    const { project, projects } = this.props;

    return (
      <tr>
        <td>
          {project
            ? (
              <Field
                name="projectId"
                component="select"
              >
                <option value={project.id}>
                  {project.name}
                </option>
                {projects.map(project => (
                  <option
                    key={project.id}
                    value={project.id}
                  >
                    {project.name}
                  </option>
                ))}
              </Field>
            )
            : (
              <Field
                name="projectId"
                component="select"
              >
                <option disabled value="">
                  Choose the project..
                </option>
                {projects.map(project => (
                  <option key={project.id} value={project.id}>{project.name}</option>
                ))}
              </Field>
            )
          }
        </td>
        <td>
          <Field
            name="date"
            type="date"
            component="input"
          />
        </td>
        <td colSpan="2">
          <Field
            name="time"
            type="text"
            component="input"
          />
        </td>
        <td>
          <button onClick={this.handleSave}>Save</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </td>
      </tr>
    );
  }
}

const getInitialValues = (editEntry) => {
  return (Object.entries(editEntry).length)
    ? editEntry
    : initialValues;
};

const mapStateToProps = (state) => ({
  initialValues: getInitialValues(state.scholasticEditEntry),
  projects: filterProjectsById(state.scholasticEditEntry.projectId, state),
  project: findProjectById(state.scholasticEditEntry.projectId, state)
});

const mapDispatchToProps = {
  unloadData,
  fetchProjects: () => fetchData()
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'scholasticEditEntry'
  })(ModifiableRow)
);