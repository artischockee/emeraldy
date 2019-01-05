const Scholastic = require('./scholastic');

class ScholasticEntry {
  constructor(data) {
    const { date, hours, minutes, project } = data;

    this.date = date;
    this.hours = hours;
    this.minutes = minutes;
    this.project = project;
  }

  static processData(rawData) {
    const allLetters = /[a-zA-Z]/gi;

    const { time } = rawData;
    const processedTime = {};

    time.split(' ').forEach(variable => {
      if (variable.endsWith('h'))
        processedTime.hours = variable.replace(allLetters, '');
      if (variable.endsWith('m'))
        processedTime.minutes = variable.replace(allLetters, '');
    });

    return {
      ...rawData,
      hours: processedTime.hours,
      minutes: processedTime.minutes
    };
  }

  save() {
    return Scholastic.insertData(this);
  }
}

module.exports = ScholasticEntry;