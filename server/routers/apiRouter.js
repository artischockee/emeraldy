const express = require('express');

const scholasticRouter = require('./scholasticRouter');
const projectsRouter = require('./projectsRouter');

const apiRouter = express.Router();

apiRouter.use('/scholastic', scholasticRouter);
apiRouter.use('/projects', projectsRouter);

module.exports = apiRouter;