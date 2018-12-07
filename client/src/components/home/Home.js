import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const apiScholastic = '/api/scholastic';

class Home extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.fetchData();
  }

  deleteEntry = (id) => {
    const init = {
      method: 'DELETE'
    };

    fetch(`${apiScholastic}/${id}`, init)
      .then(() => this.fetchData());
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
      .then(() => this.fetchData());
  };

  fetchData = () => {
    fetch(apiScholastic)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  };

  render() {
    return (
      <React.Fragment>
        <p className="just small">Home</p>
        <CreateForm onSubmit={this.createEntry} />
        <Table data={this.state.data} onEntryDelete={this.deleteEntry} />
      </React.Fragment>
    )
  }
}

const Table = ({ data, onEntryDelete }) => (
  <table>
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
        <tr key={entry.id}>
          <td>{entry.id}</td>
          <td>{new Date(entry.date).toDateString()}</td>
          <td>{entry.hours}</td>
          <td>{entry.minutes}</td>
          <td>
            <button onClick={() => onEntryDelete(entry.id)}>del</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)


const validate = values => {
  const errors = {}

  if (!values.date)
    errors.date = 'Required';

  if (!values.hours)
    errors.hours = 'Required';

  if (!values.minutes)
    errors.minutes = 'Required';

  // console.log(values);

  return errors
}

const renderField = ({
  input,
  label,
  type,
  min,
  max,
  meta: { active, touched, error }
}) => (
  <div className="form__field">
    <div className="left-side">
      <label className="input-label" htmlFor={input.name}>{label}</label>
    </div>
    <div className="right-side">
      <div className="input-area">
        <input {...input} id={input.name} placeholder={label} type={type} min={min} max={max} />
        <div className={classnames("underline", { active })} />
      </div>
      {/* {touched &&
        (error && <span>{error}</span>)} */}
    </div>
  </div>
)


const CreateForm = reduxForm({ form: 'scholasticPost', validate })(
  ({ handleSubmit }) => (
    <form className="scholastic-post__form" onSubmit={handleSubmit}>
      <Field
        name="date"
        type="date"
        component={renderField}
        label="Date"
      />
      <Field
        name="hours"
        type="number"
        min="0"
        max="24"
        component={renderField}
        label="Hours"
      />
      <Field
        name="minutes"
        type="number"
        min="0"
        max="59"
        component={renderField}
        label="Minutes"
      />
      <div className="form__field">
        <div className="left-side" />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
)

export default Home;