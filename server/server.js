const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const apiRouter = require('./routes/api');

function initialize() {
  const app = express();
  const PORT = process.env.PORT || 5000;

  mongoose.connect('mongodb://localhost/new_database', { useNewUrlParser: true });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => console.log('Connected to MongoDB'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', apiRouter);

  switch (process.env.NODE_ENV) {
    case 'development':
      app.use(errorhandler())
      break;
    case 'production':
      // Serve any static files
      app.use(express.static(path.join(__dirname, 'client/build')));
      // Handle React routing, return all requests to React app
      app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
      });
      break;
    default:
      throw new Error(`Unknown NODE_ENV value (${process.env.NODE_ENV})`);
  }

  // app.use((err, req, res, next) => {
  //   if (!err.status)
  //     err.status = 500;
  //
  //   return res.status(err.status).send(err.message);
  // });

  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

initialize();