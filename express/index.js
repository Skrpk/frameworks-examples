const express = require('express');

const rootRouter = require('./routes');

const PORT = 3000;

function createExpressServer(dbContext) {
  const app = express();

  app.use((req, res, next) => {
    req.dbContext = dbContext;
    next();
  });


  app.use((req, res, next) => {
    console.log(`Express time: ${Date.now()}`);
    next();
  });

  app.use('/', rootRouter);

  const server = app.listen(PORT, () => console.log(`Express server running on http://localhost:${PORT}`));
}

module.exports = createExpressServer;
