const Base = require('./generic/base');

class Projects extends Base {
  constructor() {
    super('projects', {
      name: 'TEXT PRIMARY KEY'
    });
  }

  insertData(data) {
    const { columns, db, tableName } = this;
    const { date, hours, minutes } = data;
    const colNames = Object.keys(columns).map(key => '(?)').toString();
    const sql = `INSERT INTO ${tableName} VALUES (${colNames})`;

    return db.run(sql, [ date, hours, minutes ]);
  }

  deleteData(id) {
    const { columns, db, tableName } = this;
    const sql = `DELETE FROM ${tableName} WHERE rowid = (?)`;

    return db.run(sql, [ id ]);
  }

  updateData(id, data) {
    const { columns, db, tableName } = this;
    const { date, hours, minutes } = data;
    const colNames = Object.keys(columns).map(key => `${key} = (?)`).toString();
    const sql = `UPDATE ${tableName} SET ${colNames} WHERE rowid = (?)`;

    return db.run(sql, [ date, hours, minutes, id ]);
  }
}

module.exports = new Projects();