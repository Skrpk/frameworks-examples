const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koaValidator = require('koa-async-validator');

const router = require('./routes');

const PORT = 3002;

function createKoaServer(dbContext) {
  const app = new Koa();

  require('koa-validate')(app);

  app.use(bodyParser());
  app.use(koaValidator());

  app.use(async (ctx, next) => {
    ctx.dbContext = dbContext;
    await next();
  });

  app.use(async (ctx, next) => {
    console.log(`Koa time: ${Date.now()}`);
    await next();
  });

  app.use(router.routes());

  const server = app.listen(PORT, () => console.log(`Koa server running on http://localhost:${PORT}`));

}

module.exports = createKoaServer;
