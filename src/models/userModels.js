const connection = require('../utils/db/connection');

const userInsert = async (user) => {
  const db = await connection();

  await db.collection('users').insertOne({ ...user, date: new Date() });
};

const findAllUsers = async () => {
  const db = await connection();

  const users = await db.collection('users').find({}).toArray();

  return users;
};

module.exports = {
  userInsert,
  findAllUsers,
};
