const express = require('express');
const { getFileInformation } = require('../controllers/fileController');

const upload = require('../middlewares/upload');

const fileRouter = express.Router();

fileRouter.post('/upload', upload, getFileInformation);

fileRouter.get('/download/:name');

module.exports = fileRouter;
