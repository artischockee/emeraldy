const scholastic = require('../scholastic');
const mainController = require('../MainController');

class ScholasticRow {
  constructor(data) {
    console.log('new ScholasticRow');

    const { date, hours, minutes, project } = data;

    // this._id = id;
    this._date = date;
    this._hours = hours;
    this._minutes = minutes;
    this._project = project;
  }

  static list() {
    return mainController.selectScholasticTable();
  }

  getData() {
    return {
      // id: this._id,
      // projectId: this._projectName,
      // projectName: this._projectName,
      date: this._date,
      hours: this._hours,
      minutes: this._minutes,
      project: this._project
    };
  }
  
  save() {
    return mainController.scholastic.insertData(this.getData());
  }
}

module.exports = ScholasticRow;