const { StatusCodes } = require('http-status-codes');
const { userInsert, findAllUsers } = require('../models/userModels');
const errorConstructor = require('../utils/function/errorHandler');
const { userSchema } = require('../utils/schemas');

const createUserVerification = async (user) => {
  const { error } = userSchema.validate(user);

  if (error) throw errorConstructor(StatusCodes.BAD_REQUEST, error.message);

  await userInsert(user);
};

const usersVerification = async () => {
  const users = await findAllUsers();

  return users;
};

module.exports = {
  createUserVerification,
  usersVerification,
};
