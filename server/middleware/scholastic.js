const express = require('express');
const mainController = require('../MainController');

const selectAllFromTable = (req, res, next) => {
  req.data = {};
  mainController.selectScholasticTable().then(
    (data) => {
      req.data.entries = data;
      next();
    },
    (error) => next(error)
  );
};

const getRowsCount = (req, res, next) => {
  mainController.scholastic.getRowsCount().then(
    (data) => {
      Object.assign(req.data, data);
      next();
    },
    (error) => next(error)
  );
};

const getProjectsCount = (req, res, next) => {
  mainController.getProjectsCount().then(
    (data) => {
      req.data.projectsCount = data;
      return res.send(JSON.stringify(req.data));
    },
    (error) => next(error)
  );
};

const router = express.Router();
router.use(selectAllFromTable, getRowsCount, getProjectsCount);

exports.router = router;