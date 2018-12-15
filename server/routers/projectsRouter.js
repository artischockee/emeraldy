const express = require('express');
const mainController = require('../MainController');

const projectsRouter = express.Router();

projectsRouter.get('/', (req, res) => {
  mainController.projects.selectAllRows().then (
    (data) => {
      res.send(JSON.stringify(data));
    },
    (error) => res.status(400).send(JSON.stringify(error))
  );
});

module.exports = projectsRouter;