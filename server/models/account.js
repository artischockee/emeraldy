const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  login: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('Account', AccountSchema);