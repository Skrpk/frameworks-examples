const Hapi = require('@hapi/hapi');

const PORT = 3001;

function createHapiServer(dbContext) {
  const server = Hapi.Server({
    port: PORT,
    host: 'localhost'
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return 'Hello world from Hapi!';
    }
  });

  server.ext('onRequest', (req, h) => {
    req.dbContext = dbContext;
    return h.continue;
  });

  server.ext('onRequest', (req, h) => {
    console.log(`Hapi time: ${Date.now()}`);
    return h.continue;
  });

  server.start().then(() => console.log(`Hapi server running on http://localhost:${PORT}`));

}

module.exports = createHapiServer;
