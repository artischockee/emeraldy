const express = require('express');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const apiRouter = require('./routers/apiRouter');

function initialize() {
  const app = express();
  const PORT = process.env.PORT || 5000;

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