const Scholastic = require('./scholastic');
const Projects = require('./projects');

const Database = require('./database');

class MainController {
  constructor(db) {
    this.db = db;
    this._scholastic = new Scholastic(db);
    this._projects = new Projects(db);
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
    const { _scholastic, _projects, db } = this;

    const sql = `SELECT ${_scholastic.tableName}.rowid, ${_projects.tableName}.name AS projectName, ${Object.keys(_scholastic.columns)} FROM ${_scholastic.tableName} JOIN ${_projects.tableName} ON ${_projects.tableName}.rowid = ${_scholastic.tableName}.projectId`;

    return db.all(sql);
  }
}

const mainController = new MainController(Database);

module.exports = mainController;