import React from 'react';
import UnmodifiableRow from './table/UnmodifiableRow';
import ModifiableRow from './table/ModifiableRow';

const Table = ({ data, onEntryDelete, onEntryEdit }) => (
  <table className="scholastic-table">
    <thead>
      <tr>
        <th>Project</th>
        <th>Date</th>
        <th>Hours</th>
        <th>Minutes</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data && data.length && data.map(entry => (
        <Row key={entry.rowid} entry={entry} onDelete={onEntryDelete} onEdit={onEntryEdit} />
      ))}
      <tr>
        <td colSpan="5">
          <button
            className="scholastic-table__button scholastic-table__button--add-new"
          >
            Add new..
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colSpan="4"></th>
        <td><button className="scholastic-table__button" disabled>Delete all</button></td>
      </tr>
    </tfoot>
  </table>
);

class Row extends React.Component {
  state = {
    isModifiable: false
  };

  setModify = (condition) => {
    this.setState({ isModifiable: condition })
  };

  modify = (data) => {
    this.props.onEdit(this.props.entry.rowid, data);
  }

  render() {
    const { entry, onDelete } = this.props;

    return this.state.isModifiable
      ? (
        <ModifiableRow
          onSubmit={this.modify}
          onEditCancel={() => this.setModify(false)}
        />
      )
      : (
        <UnmodifiableRow
          id={entry.rowid}
          projectName={entry.projectName}
          projectId={entry.projectId}
          date={entry.date}
          hours={entry.hours}
          minutes={entry.minutes}
          onDelete={onDelete}
          onEdit={() => this.setModify(true)}
        />
      );
  }
}

export default Table;