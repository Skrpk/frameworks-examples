const { Router } = require('express');

const {
  loginController,
  signupController
} = require('../controllers/auth.controller');

const router = Router();

router.post('/login', loginController);

router.post('/signup', signupController);

module.exports = router;
