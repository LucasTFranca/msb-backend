const express = require('express');
const fileRouter = require('./fileRouter');
const userRouter = require('./userRouter');

const router = express.Router();

router.use('/file', fileRouter);

router.use('/user', userRouter);

module.exports = router;
