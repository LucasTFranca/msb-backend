const { StatusCodes } = require('http-status-codes');
const { createUserVerification, usersVerification } = require('../services/userService');

const createUser = async (req, res, next) => {
  try {
    const user = req.body;

    await createUserVerification(user);

    return res.status(StatusCodes.CREATED).json({ message: 'User Created!' });
  } catch (error) {
    return next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await usersVerification();

    return res.status(StatusCodes.OK).json(users);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
