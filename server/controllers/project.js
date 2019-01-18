const Project = require('../models/project');

// const callback = (err, obj) => {
//   if (err) return console.error(err);
//   console.log(`object ${obj.name} created.`);
// }

exports.get = (req, res, next) => {
  Project.find((err, objects) => {
    if (err) return next(err);

    res.send(JSON.stringify(objects));
  });
};

exports.create = (req, res, next) => {
  const project = new Project({
    name: req.body.name
  });

  project.save((err, object) => {
    if (err)
      return console.error(err);

    console.log('project create:', object);

    res.status(201).send(JSON.stringify(object));
  });
};