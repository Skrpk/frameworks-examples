const createHapiServer = require('./hapi');
const createExpressServer = require('./express');
const createKoaServer = require('./koa');

const dbContext = require('./database/models');

createHapiServer(dbContext);
createExpressServer(dbContext);
createKoaServer(dbContext);
