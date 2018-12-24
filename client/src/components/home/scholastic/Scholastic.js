import React from 'react';
import Table from './Table';
import ControlPanel from './ControlPanel';
import Spinner from '../../generic/Spinner';

const apiScholastic = '/api/scholastic';

class Scholastic extends React.Component {
  state = {
    data: null,
    loaded: false
  };

  componentDidMount() {
    this.fetchData();

    setTimeout(() => {
      this.setState({ loaded: true })
    }, 750);
  }

  fetchData = () => {
    fetch(apiScholastic)
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => console.error(error));
  };

  deleteEntry = (id) => {
    const init = {
      method: 'DELETE'
    };

    fetch(`${apiScholastic}/${id}`, init)
      .then(() => this.fetchData())
      .catch(error => console.error(error));
  };

  editEntry = (id, data) => {
    const init = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(`${apiScholastic}/${id}`, init)
      .then(() => this.fetchData())
      .catch(error => console.error(error));
  };

  createEntry = (data) => {
    // data: { date, hours, minutes, project (id) }

    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(apiScholastic, init)
      .then(() => this.fetchData())
      .catch(error => console.error(error));
  };

  createTable = () => {
    fetch(`${apiScholastic}/tableCreate`)
    .then(() => this.fetchData())
    .catch(error => console.error(error));
  }

  dropTable = () => {
    // Simple confirm (temp)
    if (!window.confirm('You sure?'))
      return;

    fetch(`${apiScholastic}/tableDrop`)
    .then(() => this.fetchData())
    .catch(error => console.error(error));
  }

  render() {
    const { loaded } = this.state;

    if (!loaded)
      return <div className="spinner-wrapper"><Spinner /></div>;

    return (
      <React.Fragment>
        <ControlPanel
          onEntryCreate={this.createEntry}
          onTableCreate={this.createTable}
          onTableDrop={this.dropTable}
          onRefreshData={this.fetchData}
        />
        <Table
          data={this.state.data}
          onEntryDelete={this.deleteEntry}
          onEntryEdit={this.editEntry}
        />
      </React.Fragment>
    )
  }
}

export default Scholastic;