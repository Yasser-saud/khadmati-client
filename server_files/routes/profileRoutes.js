const route = require('express').Router();
const passport = require('passport');
const { newProfileValidation } = require('../middlewares/profileValidation');
const auth = passport.authenticate('jwt', { session: false });
const {
  newProfile,
  getProfile,
  editProfile,
  queryChoices,
} = require('../controllers/profileControllers');

///

// route.post("/new-profile", auth);
route.get('/user-profile', auth, getProfile);

route.patch('/update-profile', auth, editProfile);

route.get('/', queryChoices);

module.exports = route;
