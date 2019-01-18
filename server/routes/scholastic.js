const express = require('express');
const controller = require('../controllers/scholastic');

const scholasticRouter = express.Router();

// scholasticRouter.use(controller.middleware); // for all request methods
scholasticRouter.get('/',
  controller.getTableData,
  controller.getTotalTime
);
scholasticRouter.post('/', controller.createEntry);
scholasticRouter.put('/:entryId', controller.editEntry);
scholasticRouter.delete('/:entryId', controller.deleteEntry);

// scholasticRouter.get('/tableCreate');
// scholasticRouter.get('/tableDrop');

module.exports = scholasticRouter;