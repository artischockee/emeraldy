const Base = require('./generic/base');

class Login extends Base {
  constructor() {
    super('users', {
      login: 'TEXT',
      email: 'TEXT PRIMARY KEY',
      password: 'TEXT',
      firstName: 'TEXT',
      lastName: 'TEXT',
    });
  }

  checkLoginForExistence(login) {
    const { db, tableName } = this;
    const sql = `SELECT * FROM ${tableName} WHERE login = '${login}'`;

    return db.get(sql);
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

module.exports = new Login();