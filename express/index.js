const express = require('express');

const PORT = 3000;

const app = express();

const server = app.listen(PORT, () => console.log(`Express server running on http://localhost:${PORT}`));

module.exports = server;