const { Router } = require('express');

const router = Router();

router.post('/login', (req, res, next) => {
  res.send(req.dbContext.users);
  next();
});

router.post('/signup', (req, res, next) => {
  res.send(req.dbContext.users);
  next();
});

module.exports = router;
