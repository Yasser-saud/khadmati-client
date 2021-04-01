const route = require('express').Router();

route.get('/profile', (req, res) => {
  req.session.user = 'user1';
  res.status(200).send('PROFILE');
});

module.exports = route;
