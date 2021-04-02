const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../models/User');

///
const cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['token'];
  }
  return token;
};

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.JWT_SECRET,
    },
    async (payload, done) => {
      try {
        // find user with the id from the token
        const user = await User.findById(payload.userID).select('-password');

        // if user doesn't exists
        if (!user) {
          return done(null, false);
        }

        // otherwise return the user
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
