const Scholastic = require('../models/scholastic');
const ScholasticEntry = require('../models/scholasticEntry');

function processData(rawData) {
  const allLetters = /[a-zA-Z]/gi;

  const processedTime = {};

  rawData.time.split(' ').forEach(variable => {
    if (variable.endsWith('h'))
      processedTime.hours = variable.replace(allLetters, '');
    if (variable.endsWith('m'))
      processedTime.minutes = variable.replace(allLetters, '');
  });

  return {
    ...rawData,
    hours: processedTime.hours,
    minutes: processedTime.minutes
  };
}

// exports.middleware = (req,res,next) => {
//   console.log('I am Groot');
//   next();
// };

// GET '/':

exports.getTableData = (req, res, next) => {
  req.data = {};

  // 5c307210d93072487e764807 - Scholastic
  // 5c307210d93072487e764808 - BillsUpNow
  // 5c307210d93072487e764809 - Scholastic Menu Board

  Scholastic.find((err, objects) => {
    if (err) return next(err);

    req.data.entries = objects;
    next();
  });
};

exports.getTotalTime = (req, res) => {
  req.data.totalTime = { hours: 666, minutes: 1488 }; // fake data ofc
  return res.send(JSON.stringify(req.data));
};

// // // // //

exports.createEntry = (req, res) => {
  const processedData = processData(req.body);
  const { date, hours, minutes, project: project_id } = processedData;

  const entry = new Scholastic({ date, hours, minutes, project_id });

  entry.save((err, object) => {
    if (err)
      return console.error(err);

    console.log('scholastic entry created:', object);

    res.status(201).send(JSON.stringify(object));
  });

  // if (!Object.keys(data).length) {
  //   return res.status(400).send(
  //     JSON.stringify({ error: 'Sent data object was empty' })
  //   );
  // }

  // try {
  //   const processedData = ScholasticEntry.processData(data);
  //
  //   new ScholasticEntry(processedData)
  //     .save()
  //     .then(id => res.status(201).send(JSON.stringify(id)));
  // } catch (error) {
  //   return res.status(400).send(JSON.stringify(error));
  // }
};

exports.editEntry = (req, res) => {
  const { body: data } = req;

  if (!Object.keys(data).length) {
    return res.status(400).send(
      JSON.stringify({ error: 'Sent data object was empty' })
    );
  }

  // example::
  // Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
  //       if (err) return next(err);
  //       res.send('Product udpated.');
  //   });

  try {
    Scholastic.updateData(req.params.entryId, data)
      .then((data) => res.send(JSON.stringify(data)));
  } catch (error) {
    return res.status(400).send(JSON.stringify(error));
  }
};

exports.deleteEntry = (req, res, next) => {
  Scholastic.findOneAndDelete({ _id: req.params.entryId }, (err) => {
    if (err) return next(err);

    res.status(204).send('Deleted successfully!');
  });

  // try {
  //   Scholastic.deleteData(req.params.entryId)
  //     .then(() => res.status(204).send());
  // } catch (error) {
  //   return res.status(404).send(JSON.stringify(error));
  // }
};