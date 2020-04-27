const express = require('express');

const PORT = 3000;

function createExpressServer(dbContext) {
  const app = express();
  const router = app.Router();

  app.use((req, res, next) => {
    req.dbContext = dbContext;
  });

  app.get('/', (req, res) => res.send('Hello World from Express!'));

  app.use((req, res, next) => {
    console.log(`Express time: ${Date.now()}`);
    next();
  });

  const server = app.listen(PORT, () => console.log(`Express server running on http://localhost:${PORT}`));

}

module.exports = createExpressServer;
