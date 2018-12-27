const express = require('express');
const controller = require('../controllers/scholastic');

const scholasticRouter = express.Router();

scholasticRouter.get('/', controller.get);
scholasticRouter.post('/', controller.createEntry);
scholasticRouter.put('/:entryId', controller.editEntry);
scholasticRouter.delete('/:entryId', controller.deleteEntry);

/*
scholasticRouter.get('/tableCreate', (req, res) => {
  mainController.scholastic.createTable().then(
    (data) => res.send(JSON.stringify(data)),
    (error) => res.status(400).send(JSON.stringify(error))
  );
});

scholasticRouter.get('/tableDrop', (req, res) => {
  mainController.scholastic.dropTable().then(
    (data) => res.send(JSON.stringify(data)),
    (error) => res.status(400).send(JSON.stringify(error))
  );
});
*/

module.exports = scholasticRouter;