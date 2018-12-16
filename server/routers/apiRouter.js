const express = require('express');
const morgan = require('morgan');

const scholasticRouter = require('./scholasticRouter');
const projectsRouter = require('./projectsRouter');

const apiRouter = express.Router();

apiRouter.use(morgan('dev'));
apiRouter.use('/scholastic', scholasticRouter);
apiRouter.use('/projects', projectsRouter);

module.exports = apiRouter;