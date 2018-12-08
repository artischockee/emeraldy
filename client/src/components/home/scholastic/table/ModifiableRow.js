import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { unloadData } from '../../../../actions';

class ModifiableRow extends React.Component {
  handleSave = () => {
    this.props.handleSubmit();
    this.props.onEditCancel();
  };

  handleCancel = () => {
    this.props.unloadData();
    this.props.onEditCancel();
  };

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>
          <Field
            name="date"
            type="date"
            component="input"
          />
        </td>
        <td>
          <Field
            name="hours"
            type="number"
            min="0"
            max="24"
            component="input"
          />
        </td>
        <td>
          <Field
            name="minutes"
            type="number"
            min="0"
            max="59"
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

const mapStateToProps = (state) => ({
  initialValues: state.scholasticEditEntry
});

const mapDispatchToProps = {
  unloadData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'scholasticEditEntry'
  })(ModifiableRow)
);