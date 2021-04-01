const route = require('express').Router();
const { loginUser } = require('../controllers/userControllers');
const { loginValidation } = require('../middlewares/userValidation');

route.post('/login', loginValidation, loginUser);

module.exports = route;
