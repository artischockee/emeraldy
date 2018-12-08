import React from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../../../actions';

class UnmodifiableRow extends React.Component {
  handleEdit = () => {
    const { date, hours, minutes, onEdit, load } = this.props;

    load({ date, hours, minutes });
    onEdit();
  };

  render() {
    const { id, date, hours, minutes, onDelete } = this.props;

    return (
      <tr>
        <td>{id}</td>
        <td>{new Date(date).toDateString()}</td>
        <td>{hours}</td>
        <td>{minutes}</td>
        <td>
          <button onClick={() => onDelete(id)}>Delete</button>
          <button onClick={this.handleEdit}>Edit</button>
        </td>
      </tr>
    )
  }
}

const mapDispatchToProps = {
  load: loadData
};

export default connect(null, mapDispatchToProps)(UnmodifiableRow);