const sqlite3 = require('sqlite3');
const path = require('path');

class Database {
  constructor(dbFilePath) {
    this.db = new sqlite3.Database(dbFilePath, (err) => {
      if (err)
        console.log('Could not connect to database', err)
      else
        console.log('Connected to database')
    });
  }

  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, function(error, rows) {
        if (error) {
          console.log('Error running sql ' + sql);
          console.log(error);
          reject(error);
        } else
          resolve(rows);
      });
    });
  }

  each(sql, params = [], complete = null) {
    return new Promise((resolve, reject) => {
      this.db.each(sql, params, function(error, row) {
        if (error) {
          console.log('Error running sql ' + sql);
          console.log(error);
          reject(error);
        } else
          resolve(row);
      }, complete);
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

  serialize(promiseChain) {
    Promise.all(promiseChain);
  }
}

module.exports = new Database(path.resolve(__dirname, 'db.sqlite'));