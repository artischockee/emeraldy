import React from 'react';
import { connect } from 'react-redux';
import { loadData, invokeDeleteDialog } from '../../../../actions';
import SVGTrashBin from '../../../svg/TrashBin';
import SVGEdit from '../../../svg/Edit';

class UnmodifiableRow extends React.Component {
  handleEdit = () => {
    const { date, hours, minutes, projectId, onEdit, load } = this.props;

    load({ date, hours, minutes, projectId });
    onEdit();
  };

  render() {
    const { id, projectName, date, hours, minutes, onDelete, invokeDeleteDialog } = this.props;

    return (
      <tr>
        <td>{projectName}</td>
        <td>{new Date(date).toDateString()}</td>
        <td>{hours}</td>
        <td>{minutes}</td>
        <td className="scholastic-table__cell scholastic-table__cell--actions">
          <button
            className="scholastic-table__button"
            onClick={this.handleEdit}
          >
            <SVGEdit className="button__svg button__svg--edit" />
            Edit
          </button>
          <button
            className="scholastic-table__button scholastic-table__button--delete"
            onClick={() => invokeDeleteDialog(id, () => onDelete(id))}
            // onClick={() => onDelete(id)}
            >
              <SVGTrashBin className="button__svg button__svg--delete" />
            </button>
        </td>
      </tr>
    )
  }
}

const mapDispatchToProps = {
  load: loadData,
  invokeDeleteDialog
};

export default connect(null, mapDispatchToProps)(UnmodifiableRow);