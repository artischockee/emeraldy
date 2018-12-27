const express = require('express');

const loginRouter = express.Router();

// WARNING: CHANGE THE /login PATH
loginRouter.post('/login', (req, res) => {
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

module.exports = loginRouter;