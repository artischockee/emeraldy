const express = require('express');
const morgan = require('morgan');

const loginRouter = require('./login');
const scholasticRouter = require('./scholastic');
const projectsRouter = require('./projects');

const apiRouter = express.Router();

apiRouter.use(morgan('dev'));
apiRouter.use('/login', loginRouter);
apiRouter.use('/scholastic', scholasticRouter);
apiRouter.use('/projects', projectsRouter);

module.exports = apiRouter;