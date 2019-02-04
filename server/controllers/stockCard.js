const StockCard = require('../models/stockCard');
const ErrorMessage = require('../errorMessage');

// (new StockCard({
//   name: 'Autumn sales',
//   dateFrom: 'Sep 1',
//   dateTo: 'Nov 30',
//   imageSrc: './images/background3.jpg'
// })).save(error => {
//   if (error)
//     console.log(error);
// });

exports.get = (req, res, next) => {
  StockCard.find({}, (error, stockCards) => {
    if (error)
      return res.status(500).send(JSON.stringify({ error }));

    return res.send(JSON.stringify(stockCards));
  });
};

exports.create = (req, res, next) => {
  const { name, dateFrom, dateTo, imageSrc } = req.body;

  const properties = {
    name, dateFrom, dateTo, imageSrc
  };

  new StockCard(properties).save((error) => {
    if (error)
      return next(error);

    const msg = { message: 'Created successfully.' };

    return res.status(201).send(JSON.stringify(msg));
  });
};
