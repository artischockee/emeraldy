const Scholastic = require('./scholastic');

class ScholasticEntry {
  constructor(data) {
    const { date, hours, minutes, project } = data;

    this.date = date;
    this.hours = hours;
    this.minutes = minutes;
    this.project = project;
  }

  save() {
    return Scholastic.insertData(this);
  }
}

module.exports = ScholasticEntry;