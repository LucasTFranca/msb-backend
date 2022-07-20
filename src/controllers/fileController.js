const { StatusCodes } = require('http-status-codes');
const path = require('path');
const { getFileVerification } = require('../services/fileService');

const getFileInformation = (req, res, next) => {
  try {
    const { file } = req;

    const fileObject = {
      name: file.filename,
      url: `http://localhost:4000/file/download/${file.filename}`,
    };

    return res.status(StatusCodes.CREATED).json(fileObject);
  } catch (error) {
    console.log(`GET FILE INFOMATION ${error}`);
    return next(error);
  }
};

const getFile = async (req, res, next) => {
  try {
    const { name } = req.params;
    const pathFile = path.join(__dirname, `../files/${name}`);

    await getFileVerification(name);

    return res.status(StatusCodes.OK).sendFile(pathFile);
  } catch (error) {
    console.log(`GET FILE ${error}`);
    return next(error);
  }
};

module.exports = {
  getFileInformation,
  getFile,
};
