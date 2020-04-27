const Koa = require('koa');

const PORT = 3002;

function createKoaServer(dbContext) {
  const app = new Koa();

  app.use(async (ctx, next) => {
    ctx.dbContext = dbContext;
    await next();
  });

  app.use(async (ctx, next) => {
    console.log(`Koa time: ${Date.now()}`);
    await next();
  });

  app.use(async ctx => {
    ctx.body = 'Hello world from Koa!';
  });

  const server = app.listen(PORT, () => console.log(`Koa server running on http://localhost:${PORT}`));

}

module.exports = createKoaServer;
