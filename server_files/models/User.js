const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    default: 'USER',
  },
});
const User = mongoose.model('Users', schema);

module.exports = User;
