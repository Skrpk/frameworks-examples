const createHapiServer = require('./hapi');
const createExpressServer = require('./express');
const createKoaServer = require('./koa');

const DbContextProvider = require('./DBContextProvider');

createHapiServer(new DbContextProvider('HAPI BD'));
createExpressServer(new DbContextProvider('EXPRESS BD'));
createKoaServer(new DbContextProvider('KOA BD'));
