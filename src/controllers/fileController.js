const { StatusCodes } = require('http-status-codes');

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

module.exports = {
  getFileInformation,
};
