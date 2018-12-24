const scholastic = require('./scholastic');
const projects = require('./projects');
const database = require('./database');

console.log('fuck off from MainController');

class MainController {
  constructor(db) {
    this.db = db;
    this._scholastic = scholastic;
    this._projects = projects;
  }

  get scholastic() {
    return this._scholastic;
  }

  set scholastic(sch) {}

  get projects() {
    return this._projects;
  }

  set projects(prj) {}

  selectScholasticTable() {
    const { _scholastic: s, _projects: p, db } = this;

    const sch = s.tableName;
    const prj = p.tableName;

    const sql = `SELECT ${sch}.rowid, ${prj}.name AS projectName, ${Object.keys(s.columns)} FROM ${sch} JOIN ${prj} ON ${prj}.rowid = ${sch}.projectId`;

    return db.all(sql);
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