const yup = require('yup');

///
const newProfileValidation = async (req, res, next) => {
  const schema = yup.object().shape({
    fullName: yup.string().min(3).max(35).required(),
    district: yup.string().required(),
    city: yup.string().required(),
    services: yup.array().required(),
    twitterAcc: yup.string().max(45),
    instagramAcc: yup.string().max(45),
    whatsappAcc: yup.string().max(12),
    picture: yup.string(),
  });

  try {
    const isValid = await schema.validate(req.body);
    next();
  } catch ({ errors }) {
    return res.status(400).json({ errors });
  }
};

module.exports = { newProfileValidation };
