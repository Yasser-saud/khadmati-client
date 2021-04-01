const express = require('express');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
const app = next({ dev: false });
const handle = app.getRequestHandler();
const cookieSession = require('cookie-session');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

////
app.prepare().then(() => {
  const server = express();
  server.use(
    cookieSession({
      name: 'session',
      keys: ['test'],
      maxAge: 3600000,
      sameSite: true,
    })
  );
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

  server.use('/api/user', require('./server_files/routes/userRoutes'));

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
