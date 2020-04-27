const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => res.send('Hello World from Express!'));

app.use((req, res, next) => {
  console.log(`Express time: ${Date.now()}`);
  next();
});

// It will not work in this case. Explain about sequence of middleware

const server = app.listen(PORT, () => console.log(`Express server running on http://localhost:${PORT}`));

module.exports = server;
