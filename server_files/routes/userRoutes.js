const route = require('express').Router();
const {
  login,
  register,
  currentUser,
  logout,
} = require('../controllers/userControllers');
const {
  loginValidation,
  regValidation,
} = require('../middlewares/userValidation');
const passport = require('passport');
const auth = passport.authenticate('jwt', { session: false });

///
route.post('/register', regValidation, register);

route.post('/login', loginValidation, login);

route.get('/get-user', auth, currentUser);

route.get('/logout', auth, logout);

module.exports = route;
