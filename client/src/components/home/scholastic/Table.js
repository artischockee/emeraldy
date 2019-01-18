import React from 'react';
import { stringDatesDiffer } from '../../../auxiliary';
import Button from '../../generic/Button';
import UnmodifiableRow from './table/UnmodifiableRow';
import ModifiableRow from './table/ModifiableRow';

class Table extends React.Component {
  state = {
    isRowAddClicked: false
  };

  handleRowAddSwitch = () => {
    const isRowAddClicked = !this.state.isRowAddClicked;
    this.setState({ isRowAddClicked });
  };

  processTotalTime = (rawData) => {
    let { hours, minutes } = rawData;

    hours += Math.floor(minutes / 60);
    minutes %= 60;

    return `${hours}h ${minutes}m`;
  };

  render() {
    const { isRowAddClicked } = this.state;
    const { data, onEntryDelete, onEntryEdit } = this.props;

    if (!data || !data.entries || !data.totalTime)
      return null;

    const totalTime = this.processTotalTime(data.totalTime);

    return (
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
          {!!data.entries.length && data.entries.map((entry, index, entries) => {
            return (
              <React.Fragment key={entry._id}>
                {index > 0 && stringDatesDiffer(entry.date, entries[index - 1].date, 'm') &&
                  <TotalRow date={entries[index - 1].date} />
                }
                <Row entry={entry} onDelete={onEntryDelete} onEdit={onEntryEdit} />
              </React.Fragment>
            );
          })}
          {isRowAddClicked
            ? (
              <ModifiableRow
                onSubmit={() => {console.log('onSubmit');}}
                onEditCancel={this.handleRowAddSwitch}
              />
            )
            : <RowAdd onClick={this.handleRowAddSwitch} />
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2" />
            <td colSpan="2">
              Total time: {totalTime}
            </td>
            <td />
          </tr>
        </tfoot>
      </table>
    );
  }
}

const TotalRow = ({ date }) => {
  return (
    <tr style={{ borderBottom: '2px solid #323232' }}>
      <td />
      <td>
        {new Date(date).toLocaleString('en-us', { year: 'numeric', month: 'long' })}
      </td>
      <td colSpan="2">
        Total time: ~
      </td>
      <td />
    </tr>
  );
};

const RowAdd = ({ onClick: activateModifiableRow }) => (
  <tr>
    <td colSpan="5">
      <Button
        className="scholastic-table__button scholastic-table__button--add-new"
        content="Add new.."
        onClick={activateModifiableRow}
      />
    </td>
  </tr>
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
          id={entry._id}
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