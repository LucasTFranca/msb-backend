const fs = require('fs');
const errorConstructor = require('../utils/function/errorHandler');

const getFileVerification = (name) => {
  if (!name) throw errorConstructor('File name is required');

  const file = fs.readFileSync(`${__dirname}/../files/${name}`);

  if (!file) throw errorConstructor('File not found');
};

module.exports = {
  getFileVerification,
};
