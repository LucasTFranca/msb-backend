const { StatusCodes } = require('http-status-codes');
const { userInsert } = require('../models/userModels');
const errorConstructor = require('../utils/function/errorHandler');
const { userSchema } = require('../utils/schemas');

const createUserVerification = async (user) => {
  const { error } = userSchema.validate(user);

  if (error) throw errorConstructor(StatusCodes.BAD_REQUEST, error.message);

  await userInsert(user);
};

module.exports = {
  createUserVerification,
};
