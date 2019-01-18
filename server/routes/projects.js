const express = require('express');
const controller = require('../controllers/project');

const projectsRouter = express.Router();

projectsRouter.get('/', controller.get);
// projectsRouter.post('/', controller.create);

module.exports = projectsRouter;