import React from 'react';
import UnmodifiableRow from './table/UnmodifiableRow';
import ModifiableRow from './table/ModifiableRow';

const Table = ({ data, onEntryDelete, onEntryEdit }) => (
  <table className="scholastic-table">
    <thead>
      <tr>
        <th>id</th>
        <th>date</th>
        <th>hours</th>
        <th>minutes</th>
        <th>actions</th>
      </tr>
    </thead>
    <tbody>
      {data && data.map(entry => (
        <Row key={entry.id} entry={entry} onDelete={onEntryDelete} onEdit={onEntryEdit} />
      ))}
    </tbody>
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
    this.props.onEdit(this.props.entry.id, data);
  }

  render() {
    const { entry, onDelete } = this.props;

    return this.state.isModifiable
      ? (
        <ModifiableRow
          onSubmit={this.modify}
          id={entry.id}
          onEditCancel={() => this.setModify(false)}
        />
      )
      : (
        <UnmodifiableRow
          id={entry.id}
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