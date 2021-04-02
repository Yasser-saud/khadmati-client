const Profile = require('../models/Profile');
const qs = require('query-string');

///
// create new profile
const newProfile = async (req, res) => {
  const {
    userID,
    fullName,
    district,
    city,
    services,
    twitterAcc,
    instagramAcc,
    whatsappAcc,
    picture,
  } = req.body;

  //check if theres' a profile already with the same userID
  const profile = await Profile.findOne({ userID: req.user._id });
  if (profile) {
    return res
      .status(400)
      .json({ msg: "There's an already profile with the same userID" });
  } else {
    // make a new profile with the included data
    const newProfile = new Profile({
      userID: req.user._id,
      fullName,
      district,
      city,
      services,
      twitterAcc,
      instagramAcc,
      whatsappAcc,
      picture,
    });

    await newProfile.save();
    res.status(201).json({ newProfile });
  }
};

// get user profile based on userID
const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userID: req.user._id });
    if (!profile) {
      return res
        .status(200)
        .json({ msg: "There's no profile with that userID" });
    } else {
      return res.status(200).json({ profile });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

// patch user profile
const editProfile = async (req, res) => {
  try {
    const updateProfile = await Profile.updateOne(
      { userID: req.user._id },
      { $set: req.body }
    );
    res.status(200).json({ message: 'updated successfully' });
  } catch (error) {
    res.send(error);
  }
};

// get profiles based on choice
const queryChoices = async (req, res) => {
  try {
    const { city, services } = req.query;
    const obj = { city, services };
    const st = qs.stringify(obj);
    const query = qs.parse(st);
    const queryResult = await Profile.find(query);
    return res.status(200).json({ queryResult });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};
module.exports = { newProfile, getProfile, queryChoices, editProfile };
