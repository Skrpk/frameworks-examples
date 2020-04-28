const router = require('koa-router')();
const authRouter = require('./auth');

router.use('/auth', authRouter.routes());

module.exports = router;
