import React from 'react';
import TableRow from './TableRow';

class TableBody extends React.Component {

  state = {
    data: null,
    time: null
  }

  processData = (rawData) => {
    if (rawData === null) {
      console.log('data is null');
      return;
    }

    const data = []

    for (let i = 0; i < rawData[0].lessons.length; ++i)
    data.push(rawData.map(day => day.lessons[i]))

    this.setState({ data })
  };

  processTime = (time) => this.setState({ time });

  componentDidMount() {
    let apiRequestData =
    fetch('./data.json')
    .then(response => response.json());

    let apiRequestTime =
    fetch('./time.json')
    .then(response => response.json());

    Promise.all([
      apiRequestData,
      apiRequestTime
    ]).then(values => {
      this.processData(values[0]);
      this.processTime(values[1]);
    });
  }

  render() {
    const { data, time } = this.state;

    if (!data || !time) return null;

    return (
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index} data={row} time={time[index]}/>
        ))}
      </tbody>
    );
  }
}

export default TableBody;