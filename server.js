const express = require('express');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const cookieSession = require('cookie-session');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');
require('./server_files/config/passport');
////
app.prepare().then(() => {
  const server = express();

  mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log('-> -> DATABASE IS CONNECTED');
    }
  );
  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());
  server.use(cookieParser());
  server.use(passport.initialize());

  server.use('/api/user', require('./server_files/routes/userRoutes'));
  server.use('/api/profile', require('./server_files/routes/profileRoutes'));

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
