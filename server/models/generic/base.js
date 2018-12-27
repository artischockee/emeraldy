const database = require('../../database');

class Base {
  constructor(tableName, columns) {
    this.db = database;
    this.tableName = tableName;
    this.columns = columns;
  }

  createTable() {
    const { columns, db, tableName } = this;
    const colNames = Object.entries(columns).map(entry => `${entry[0]} ${entry[1]}`).toString();
    const sql = `CREATE TABLE IF NOT EXISTS ${tableName} (${colNames})`;

    return db.run(sql);
  }

  dropTable() {
    const { columns, db, tableName } = this;
    const sql = `DROP TABLE IF EXISTS ${tableName}`;

    return db.run(sql);
  }

  selectAllRows() {
    const { columns, db, tableName } = this;
    const sql = `SELECT rowid AS id, ${Object.keys(columns)} FROM ${tableName}`;

    return db.all(sql);
  }

  getRowsCount() {
    const { columns, db, tableName } = this;
    const sql = `SELECT count(*) AS count FROM ${tableName}`;

    return db.get(sql);
  }
}

module.exports = Base;