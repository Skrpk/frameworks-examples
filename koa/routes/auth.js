const router = require('koa-router')();

const {
  loginController,
  signupController
} = require('../controllers/auth.controller');

router.post('/login', loginController);

router.post('/signup', signupController);

module.exports = router;
