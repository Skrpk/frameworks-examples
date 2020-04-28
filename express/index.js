const express = require('express');
const bodyParser = require('body-parser');
const expressWinston = require('express-winston');
const winston = require('winston');

const rootRouter = require('./routes');

const PORT = 3000;

function createExpressServer(dbContext) {
  const app = express();

  app.use(bodyParser.json());

  app.use((req, res, next) => {
    req.dbContext = dbContext;
    next();
  });

  app.use((req, res, next) => {
    console.log(`Express time: ${Date.now()}`);
    next();
  });

  app.use('/', rootRouter);

  app.use(expressWinston.errorLogger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
  }));

  const server = app.listen(PORT, () => console.log(`Express server running on http://localhost:${PORT}`));
}

module.exports = createExpressServer;
