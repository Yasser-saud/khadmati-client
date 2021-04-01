const yup = require('yup');

// register validation
const regValidation = async (req, res, next) => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(200).required(),
  });
  try {
    const isValid = await schema.validate(req.body);
    return next();
  } catch ({ errors }) {
    return res.status(400).json({ errors });
  }
};

// sign in validation
const loginValidation = async (req, res, next) => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  try {
    const isValid = await schema.validate(req.body);
    return next();
  } catch ({ errors }) {
    return res.status(400).json({ errors });
  }
};
module.exports = { regValidation, loginValidation };
