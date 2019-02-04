const mongoose = require('mongoose');

const StockCardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dateFrom: { type: String, required: true },
  dateTo: { type: String, required: true },
  imageSrc: String
});

module.exports = mongoose.model('StockCard', StockCardSchema);
