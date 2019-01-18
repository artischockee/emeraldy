const Account = require('../models/account');

exports.get = (req, res, next) => {
  // try {
  //   Projects.selectAllRows().then(
  //     (data) => res.send(JSON.stringify(data))
  //   );
  // } catch (error) {
  //   res.status(400).send(JSON.stringify(error));
  // }
};

exports.authenticate = (req, res, next) => {
  // try {
  //   Login.checkLoginForExistence(req.body.login).then(
  //     (data) => {
  //       if (!data)
  //         return res.status(404).send('No user found.');
  //
  //       req.data = data;
  //       next();
  //     }
  //   );
  // } catch (error) {
  //   res.status(400).send(JSON.stringify(error));
  // }
};

exports.logging = (req, res) => {
  // try {
  //   if (req.body.password === req.data.password) {
  //     console.log('login is correct...');
  //     res.send('Everything is OK');
  //   }
  // } catch (error) {
  //   res.status(400).send(JSON.stringify(error));
  // }
};

exports.create = (req, res, next) => {
  // const project = new Project({
  //   name: req.body.name
  // });
  //
  // project.save((err) => {
  //   if (err)
  //     return next(err);
  //   res.status(201).send('Created successfully');
  // });

  // const { body: data } = req;
  //
  // if (!Object.keys(data).length)
  //   return res.status(400).send(
  //     JSON.stringify({ error: 'Sent data object was empty' })
  //   );
  //
  // try {
  //   new ScholasticEntry(data)
  //     .save()
  //     .then(id => res.status(201).send(JSON.stringify(id)));
  // } catch (error) {
  //   return res.status(400).send(JSON.stringify(error));
  // }
};