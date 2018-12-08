class Scholastic {
  constructor(db) {
    this.db = db;
    this.tableName = "scholastic";
    this.columns = {
      date: 'TEXT PRIMARY KEY',
      hours: 'INTEGER',
      minutes: 'INTEGER'
    };
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

module.exports = Scholastic;