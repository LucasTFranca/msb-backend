const { createUserVerification } = require('../services/userService');

const createUser = async (req, res, next) => {
  try {
    const user = req.body;

    await createUserVerification(user);

    return res.status(201).json({ message: 'User Created!' });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createUser,
};
