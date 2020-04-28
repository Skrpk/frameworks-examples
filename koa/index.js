const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const router = require('./routes');

const PORT = 3002;

function createKoaServer(dbContext) {
  const app = new Koa();

  app.use(bodyParser());

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
