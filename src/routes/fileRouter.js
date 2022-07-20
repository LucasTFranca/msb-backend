const express = require('express');
const { getFileInformation, getFile } = require('../controllers/fileController');

const upload = require('../middlewares/upload');

const fileRouter = express.Router();

fileRouter.post('/upload', upload, getFileInformation);

fileRouter.get('/download/:name', getFile);

module.exports = fileRouter;
