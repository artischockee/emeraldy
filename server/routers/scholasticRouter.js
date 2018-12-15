const express = require('express');
const mainController = require('../MainController');

// NOTE: should i use mergeParams?
const scholasticRouter = express.Router({ mergeParams: true });

scholasticRouter.get('/', (req, res) => {
  const dataToSend = {};

  mainController.selectScholasticTable().then(
    (data) => {
      dataToSend.entries = data;
      mainController.scholastic.getRowsCount().then(
        (data) => {
          Object.assign(dataToSend, data);
          res.send(JSON.stringify(dataToSend));
        },
        (error) => res.status(400).send(JSON.stringify(error))
      );
    },
    (error) => res.status(400).send(JSON.stringify(error))
  );
});

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

scholasticRouter.delete('/:entryId', (req, res) => {
  mainController.scholastic.deleteData(req.params.entryId).then(
    (data) => res.status(204).send(),
    (error) => res.status(404).send()
  );
});

scholasticRouter.put('/:entryId', (req, res) => {
  const { body } = req;

  if (!Object.keys(body).length) {
    res.status(400).send(
      JSON.stringify({ error: 'Sent data object was empty' })
    );
    return;
  }

  mainController.scholastic.updateData(req.params.entryId, body).then(
    (data) => res.send(JSON.stringify(data)),
    (error) => res.status(400).send(JSON.stringify(error))
  );
})

scholasticRouter.post('/', (req, res) => {
  const { body } = req;

  if (!Object.keys(body).length) {
    res.status(400).send(JSON.stringify({ error: 'Sent data object was empty' }));
    return;
  }

  mainController.scholastic.insertData(body).then(
    (data) => res.status(201).send(JSON.stringify(data)),
    (error) => res.status(400).send(JSON.stringify(error))
  );
});

module.exports = scholasticRouter;