const express = require('express');

const fileRouter = express.Router();

fileRouter.post('/upload');

fileRouter.get('/download/:name');

export default fileRouter;
