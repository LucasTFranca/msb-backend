import fileRouter from './fileRouter';
import userRouter from './userRouter';

const express = require('express');

const router = express.Router();

router.use('/file', fileRouter);

router.use('/user', userRouter);

export default router;
