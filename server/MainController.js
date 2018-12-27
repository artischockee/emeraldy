const scholastic = require('./scholastic');
const projects = require('./projects');
const database = require('./database');

class MainController {
  constructor(db) {
    this.db = db;
    this._scholastic = scholastic;
    this._projects = projects;
  }

  getProjectsCount() {
    const { _scholastic: s, _projects: p, db } = this;

    const sch = s.tableName;
    const prj = p.tableName;

    const sql = `SELECT ${prj}.name AS projectName, count(${sch}.projectId) AS count FROM ${prj} LEFT JOIN ${sch} ON ${prj}.rowid = ${sch}.projectId GROUP BY ${prj}.rowid`;

    return db.all(sql);
  }
}

module.exports = new MainController(database);