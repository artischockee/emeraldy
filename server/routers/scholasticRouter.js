const express = require('express');
const mainController = require('../MainController');

const ScholasticRow = require('../components/ScholasticRow');

// const scholastic = require('../middleware/scholastic');

// NOTE: should i use mergeParams?
const scholasticRouter = express.Router({ mergeParams: true });

// scholasticRouter.get('/', scholastic.router);

scholasticRouter.get('/', (req, res) => {
  ScholasticRow
    .list()
    .then((data) => res.send(JSON.stringify(data)))
});

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
scholasticRouter.delete('/:entryId', (req, res) => {
  try {
    mainController.scholastic
      .deleteData(req.params.entryId)
      .then(() => res.status(204).send());
  } catch (error) {
    return res.status(404).send(error);
  }
});
/*
scholasticRouter.put('/:entryId', (req, res) => {
  const { body } = req;

  if (!Object.keys(body).length)
    return res.status(400).send(
      JSON.stringify({ error: 'Sent data object was empty' })
    );

  mainController.scholastic.updateData(req.params.entryId, body).then(
    (data) => res.send(JSON.stringify(data)),
    (error) => res.status(400).send(JSON.stringify(error))
  );
})
*/
scholasticRouter.post('/', (req, res) => {
  const { body } = req;

  if (!Object.keys(body).length)
    return res.status(400).send(
      JSON.stringify({ error: 'Sent data object was empty' })
    );

  try {
    new ScholasticRow(body)
      .save()
      .then(id => res.status(201).send(JSON.stringify(id)));
  } catch (error) {
    return res.status(400).send(JSON.stringify(error));
  }

  // mainController.scholastic.insertData(body).then(
  //   (data) => res.status(201).send(JSON.stringify(data)),
  //   (error) => res.status(400).send(JSON.stringify(error))
  // );
});

module.exports = scholasticRouter;