const express = require('express');
const controller = require('../controllers/login');

const loginRouter = express.Router();

loginRouter.post('/', controller.authenticate, controller.logging);

module.exports = loginRouter;