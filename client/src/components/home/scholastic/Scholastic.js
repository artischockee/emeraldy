import React from 'react';
import CreateForm from './CreateForm';
import Table from './Table';

const apiScholastic = '/api/scholastic';

class Scholastic extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.fetchData();
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
      body: JSON.stringify(Object.assign({}, data, { id }))
    };

    fetch(`${apiScholastic}/${id}`, init)
      .then(() => this.fetchData())
      .catch(error => console.error(error));
  };

  createEntry = (data) => {
    // data: { date: "", hours: "", minutes: "" }

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
    return (
      <React.Fragment>
        <CreateForm onSubmit={this.createEntry} />
        <button onClick={this.createTable}>Create table</button>
        <button onClick={this.dropTable}>Drop table</button>
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