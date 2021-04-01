// const userRoutes = require('./server_files/routes/userRoutes');
const profileRoutes = require('./server_files/routes/profileRoutes');

module.exports = {
  fuction(app) {
    // app.use('/api/user', userRoutes);
    app.use('/api/profile', profileRoutes);
  },
};
