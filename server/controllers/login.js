const Account = require('../models/account');
const ErrorMessage = require('../errorMessage');

// const staff = new Account({
//   login: 'staff',
//   email: 'staff@emeraldy.com',
//   password: 'qwe'
// });
// staff.save((err, obj) => {
//   if (err) return console.error(err);
// });


exports.get = (req, res, next) => {

};

exports.authenticate = async (req, res, next) => {
  const { login } = req.body;

  const entryToFind = { login };
  let accountData = null;

  try {
    await Account.findOne(entryToFind, (error, object) => {
      if (error)
        console.error(error);
      if (object)
        accountData = object;
    });

    if (accountData === null) {
      const errorMessage = new ErrorMessage({
        login: `User ${login} does not exist`
      });

      return res.status(404).send(JSON.stringify(errorMessage));
    }

    req.data = accountData;
    next();
  }
  catch (error) {
    res.status(400).send(JSON.stringify(error));
  }
};

exports.logging = (req, res) => {
  const { data } = req;
  try {
    if (req.body.password === data.password) {
      const pureData = {
        login: data.login,
        firstName: data.firstName,
        lastName: data.lastName
      };

      return res.send(JSON.stringify(pureData));
    }
    else {
      const errorMessage = new ErrorMessage({
        password: 'Invalid password'
      });

      return res.status(404).send(JSON.stringify(errorMessage));
    }
  } catch (error) {
    res.status(400).send(JSON.stringify(error));
  }
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
