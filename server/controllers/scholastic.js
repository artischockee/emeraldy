const Scholastic = require('../models/scholastic');
const ScholasticEntry = require('../models/scholasticEntry');

exports.get = (req, res) => {
  Scholastic.getTableData().then(
    (data) => res.send(JSON.stringify(data))
  );
};

exports.createEntry = (req, res) => {
  const { body: data } = req;

  if (!Object.keys(data).length) {
    return res.status(400).send(
      JSON.stringify({ error: 'Sent data object was empty' })
    );
  }

  try {
    new ScholasticEntry(data)
      .save()
      .then(id => res.status(201).send(JSON.stringify(id)));
  } catch (error) {
    return res.status(400).send(JSON.stringify(error));
  }
};

exports.editEntry = (req, res) => {
  const { body: data } = req;

  if (!Object.keys(data).length) {
    return res.status(400).send(
      JSON.stringify({ error: 'Sent data object was empty' })
    );
  }

  try {
    Scholastic.updateData(req.params.entryId, data)
      .then((data) => res.send(JSON.stringify(data)));
  } catch (error) {
    return res.status(400).send(JSON.stringify(error));
  }
};

exports.deleteEntry = (req, res) => {
  try {
    Scholastic.deleteData(req.params.entryId)
      .then(() => res.status(204).send());
  } catch (error) {
    return res.status(404).send(JSON.stringify(error));
  }
};