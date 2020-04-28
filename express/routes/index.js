const { Router } = require('express');

const rootRouter = Router();

const authRouter = require('./auth');

rootRouter.use('/auth', authRouter);

module.exports = rootRouter;
