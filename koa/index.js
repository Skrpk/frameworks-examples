const Koa = require('koa');

const PORT = 3002;

const app = new Koa();

const server = app.listen(PORT, () => console.log(`Koa server running on http://localhost:${PORT}`));

module.exports = server;
