const express = require('express');
const controller = require('../controllers/stockCard');

const stockCardRouter = express.Router();

stockCardRouter.get('/', controller.get);
stockCardRouter.post('/', controller.create);

module.exports = stockCardRouter;
