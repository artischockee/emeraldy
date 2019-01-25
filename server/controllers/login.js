const Account = require('../models/account');

// const admin = new Account({
//   login: 'artischocke',
//   email: 'artyeug@gmail.com',
//   password: 'supreme',
//   firstName: 'Artem',
//   lastName: 'Piskarev'
// });
//
// admin.save((err, obj) => {
//   if (err) return console.error(err);
// });


const hydrateUserData = (rawData, listOfProps = [ '__v', '_id' ]) => {

  // console.log('hydrateUserData', rawData, listOfProps);
  if (rawData === null || rawData === undefined)
    return null;

  // const data = rawData;
  const data = Object.assign({}, rawData);

  // listOfProps.forEach(prop => delete data[prop])

  // delete data.password;
  // delete data.__v;
  // delete data._id;

  console.log('old data', rawData);
  console.log('hydrated data', data);

  return data;
};

exports.get = (req, res, next) => {
  // try {
  //   Projects.selectAllRows().then(
  //     (data) => res.send(JSON.stringify(data))
  //   );
  // } catch (error) {
  //   res.status(400).send(JSON.stringify(error));
  // }
};

exports.authenticate = async (req, res, next) => {
  const { login } = req.body;

  const entryToFind = {
    login
  };

  let accountData = null;

  try {
    await Account.findOne(entryToFind, (error, object) => {
      if (error)
        console.error(error);
      if (object)
        accountData = hydrateUserData(object);
    });

    if (accountData === null) {
      const errorMessage = {
        error: `User ${login} doesn't exist.`
      };

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
  try {
    if (req.body.password === req.data.password) {
      console.log('login is correct...');
      res.send(JSON.stringify(req.data));
    }
    else {
      const errorMessage = {
        error: `The password for user ${req.body.login} doesn't match.`
      };

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
