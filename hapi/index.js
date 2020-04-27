const Hapi = require('@hapi/hapi');

const PORT = 3001;

const server = Hapi.Server({
  port: PORT,
  host: 'localhost'
});


server.start().then(() => console.log(`Hapi server running on http://localhost:${PORT}`));

module.exports = server;
