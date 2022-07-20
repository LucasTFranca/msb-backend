const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  message: Joi.string().required(),
  url: Joi.string().required(),
  fileName: Joi.string().required(),
});

module.exports = {
  userSchema,
};
