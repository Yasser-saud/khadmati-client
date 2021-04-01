const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Profile = require('../models/Profile');

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  // check if user is registered
  const user = await User.findOne({ email: email });
  if (!user) {
    try {
      // encrypt password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // register new user
      const newUser = new User({
        email,
        password: hashedPassword,
      });
      const token = jwt.sign({ userID: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      await newUser.save();

      const newProfile = new Profile({ userID: newUser._id });

      await newProfile.save();

      return res.status(201).json({
        token,
        message: 'New account and profile have been created successfully',
      });
    } catch (error) {
      const { errors } = error;
      if (errors) {
        return res.status(400).json({ errors });
      }
      console.log(error);
      return res.status(500).json({ error });
    }
  } else {
    return res.status(400).json({ msg: 'البريد الالكتروني مسجل من قبل' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // check if there's a user with that email
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET, {
          expiresIn: 900,
        });
        // res.setHeader(
        // 	'set-cookie',
        // 	cookie.serialize('token', token, {
        // 		httpOnly: true,
        // 		sameSite: 'None',
        // 		// secure: true,
        // 		maxAge: 900,
        // 		path: '/',
        // 	}),
        // );
        req.session.user = user._id;
        return res.status(200).json({ login: 'sucess' });
      } else {
        return res.status(400).json({ msg: 'كلمة المرور خطأ' });
      }
    } else {
      return res
        .status(400)
        .json({ msg: 'لايوجد حساب بهذا البريد الاليكتروني' });
    }
  } catch (error) {
    res.send(error);
  }
};

//logout
const logout = (req, res) => {
  // res.setHeader(
  // 	'Set-Cookie',
  // 	cookie.serialize('token', null, {
  // 		httpOnly: true,
  // 		sameSite: 'none',
  // 		secure: true,
  // 		maxAge: -900,
  // 		path: '/',
  // 	}),
  // );
  res.status(200).json({ logout: 'sucess' });
};

// get user info
const getUser = async (req, res) => {
  return res.status(200).json(req.user);
};

module.exports = { registerUser, loginUser, getUser, logout };
