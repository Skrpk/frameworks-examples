const router = require('koa-router')();

router.post('/login', (ctx, next) => {
  ctx.body = 'login';
});

router.post('/signup', (ctx, next) => {
  ctx.body = 'signup';
});

module.exports = router;
