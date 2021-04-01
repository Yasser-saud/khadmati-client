const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
  },
  district: {
    type: String,
  },
  city: {
    type: String,
  },
  services: {
    type: Array,
  },
  twitterAcc: {
    type: String,
    default: null,
  },
  instagramAcc: {
    type: String,
    default: null,
  },
  whatsappAcc: {
    type: String,
    default: null,
  },
  picture: {
    type: String,
    default: null,
  },
});

const Profile = mongoose.model('Profiles', schema);

module.exports = Profile;
