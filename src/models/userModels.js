const connection = require('../utils/db/connection');

const userInsert = async (user) => {
  const db = await connection();

  await db.collection('users').insertOne({ ...user, date: new Date() });
};

module.exports = {
  userInsert,
};
