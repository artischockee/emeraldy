const Base = require('./generic/base');
const tableNames = require('../common/tableNames');

class Scholastic extends Base {
  constructor() {
    super('scholastic', {
      date: 'TEXT PRIMARY KEY',
      hours: 'INTEGER',
      minutes: 'INTEGER',
      projectId: 'INTEGER'
    });
  }

  getTableData() {
    const { columns, tableName, db } = this;

    const sch = tableName;
    const prj = tableNames.projects;

    const sql = `SELECT ${sch}.rowid, ${prj}.name AS projectName, ${Object.keys(columns)} FROM ${sch} JOIN ${prj} ON ${prj}.rowid = ${sch}.projectId ORDER BY date`;

    return db.all(sql);
  }

  getTotalTime() {
    const { columns, tableName, db } = this;
    const sql = `SELECT SUM(hours) AS hours, SUM(minutes) AS minutes FROM ${tableName}`;

    return db.get(sql);
  }

  insertData(data) {
    const { columns, db, tableName } = this;
    const { date, hours, minutes, project } = data;
    const colNames = Object.keys(columns).map(key => '(?)').toString();
    const sql = `INSERT INTO ${tableName} VALUES (${colNames})`;

    return db.run(sql, [ date, hours, minutes, project ]);
  }

  deleteData(id) {
    const { columns, db, tableName } = this;
    const sql = `DELETE FROM ${tableName} WHERE rowid = (?)`;

    return db.run(sql, [ id ]);
  }

  updateData(id, data) {
    const { columns, db, tableName } = this;
    const { date, hours, minutes, projectId } = data;
    const colNames = Object.keys(columns).map(key => `${key} = (?)`).toString();
    const sql = `UPDATE ${tableName} SET ${colNames} WHERE rowid = (?)`;

    return db.run(sql, [ date, hours, minutes, projectId, id ]);
  }
}

module.exports = new Scholastic();