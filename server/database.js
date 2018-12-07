const sqlite3 = require('sqlite3');

class Database {
  constructor(dbFilePath) {
    this.db = new sqlite3.Database(dbFilePath, (err) => {
      if (err)
        console.log('Could not connect to database', err)
      else
        console.log('Connected to database')
    });
  }

  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, function(error, row) {
        if (error) {
          console.log('Error running sql ' + sql);
          console.log(error);
          reject(error);
        } else
          resolve(row);
      });
    });
  }

  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function(error) {
        if (error) {
          console.log('Error running sql ' + sql);
          console.log(error);
          reject(error);
        } else
          resolve({ id: this.lastID });
      });
    });
  }
}

module.exports = Database;