const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./server/database');
// const Repo = require('./server/repo');

const DB = new Database('./db.sqlite');
// DB.serialize(function() {
//   DB.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, login TEXT, email TEXT, password TEXT, firstName TEXT, lastName TEXT)");
//
//   DB.run("CREATE TABLE IF NOT EXISTS scholastic (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, hours INTEGER, minutes INTEGER)");

  // DB.run("INSERT INTO users (login, email, password, firstName, lastName) VALUES
  //   ($login, $email, $password, $firstName, $lastName)",
  //   {
  //     $login: 'artischocke',
  //     $email: 'artyeug@gmail.com',
  //     $password: 'password',
  //     $firstName: 'Artem',
  //     $lastName: 'Piskarev'
  //   },
  //   function (err) { console.log(this.lastId) }
  // );

  // const stmt = DB.prepare("INSERT INTO users VALUES (null, ?, ?, ?, ?, ?)");
  // stmt.run("artischocke", "email@a.a", "password", "Artem", "Piskarev");
  // stmt.finalize();

  // DB.each("SELECT * FROM users", function(err, row) {
  //     console.log(row);
  // });
// });

// DB.close();

const app = express();
const PORT = process.env.PORT || 5000;

const apiRouter = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);

apiRouter.post('/login', (req, res) => {
  const { login, password } = req.body;

  const sql = 'SELECT * FROM users WHERE login = $login AND password = $password';

  DB.get(sql, { $login: login, $password: password })
    .then(
      (data) => {
        res.send(JSON.stringify(data));
      },
      (error) => {
        res.status(400).send(JSON.stringify(error));
      }
    );
})

const insert = (body) => {
  return new Promise((resolve, reject) => {
    DB.run(
      "INSERT INTO scholastic VALUES (null, $date, $hours, $minutes)",
      {
        $date: body.date,
        $hours: body.hours,
        $minutes: body.minutes,
      },
      function(err) {
        if (err)
          reject(err);
        else
          resolve("SD");
      }
    );
  });
};


// For a large or undefined amount of rows use .each() instead on .all()
const getRows = () => {
  return new Promise((resolve, reject) => {
    DB.all('SELECT * FROM scholastic', (err, rows) => {
      if (err)
        reject({ error: 'Error' });
      else
        resolve(rows)
    });
  });
}

apiRouter.get('/scholastic', (req, res) => {
  getRows().then(
    (data) => {
      res.send(JSON.stringify(data));
    },
    (error) => {
      throw new Error(error);
    }
  );
});

apiRouter.delete('/scholastic/:entryId', (req, res) => {
  const { entryId } = req.params;

  console.log(entryId);

  res.status(204).send();
});

apiRouter.post('/scholastic', (req, res) => {
  const { body } = req;

  if (!Object.keys(body).length) {
    res.status(400).send(JSON.stringify({ shit: 'head' }));
    return;
  }

  insert(body).then(
    (success) => {
      res.status(201).send(JSON.stringify({ success: true }));
    },
    (failure) => {
      throw new Error(failure);
    }
  );
});

apiRouter.post('/world', (req, res) => {
  console.log(req.body);

  DB.all('SELECT * FROM users', (err, rows) => row(rows));

  res.send(JSON.stringify({msg: 'blablabla', post: `${req.body.post}`}));
});

/*
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
*/

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));