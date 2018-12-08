const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./server/database');
const Scholastic = require('./server/scholastic');

const DB = new Database('./db.sqlite');
const scholastic = new Scholastic(DB);

//   DB.run(
//     "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, login TEXT, email TEXT, password TEXT, firstName TEXT, lastName TEXT)"
//   )

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

apiRouter.get('/scholastic', (req, res) => {
  scholastic.selectAllRows().then(
    (data) => res.send(JSON.stringify(data)),
    (error) => res.status(400).send(JSON.stringify(error))
  );
});

apiRouter.get('/scholastic/tableCreate', (req, res) => {
  scholastic.createTable().then(
    (data) => res.send(JSON.stringify(data)),
    (error) => res.status(400).send(JSON.stringify(error))
  );
});

apiRouter.get('/scholastic/tableDrop', (req, res) => {
  scholastic.dropTable().then(
    (data) => res.send(JSON.stringify(data)),
    (error) => res.status(400).send(JSON.stringify(error))
  );
});

apiRouter.delete('/scholastic/:entryId', (req, res) => {
  scholastic.deleteData(req.params.entryId).then(
    (data) => res.status(204).send(),
    (error) => res.status(404).send()
  );
});

apiRouter.put('/scholastic/:entryId', (req, res) => {
  const { body } = req;

  if (!Object.keys(body).length) {
    res.status(400).send(JSON.stringify({ error: 'Sent data object was empty' }));
    return;
  }

  scholastic.updateData(req.params.entryId, body).then(
    (data) => res.send(JSON.stringify(data)),
    (error) => res.status(400).send(JSON.stringify(error))
  );
})

apiRouter.post('/scholastic', (req, res) => {
  const { body } = req;

  if (!Object.keys(body).length) {
    res.status(400).send(JSON.stringify({ error: 'Sent data object was empty' }));
    return;
  }

  scholastic.insertData(body).then(
    (data) => res.status(201).send(JSON.stringify(data)),
    (error) => res.status(400).send(JSON.stringify(error))
  );
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