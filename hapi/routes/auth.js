const {
  loginController,
  signupController
} = require('../controllers/auth.controller');

module.exports = [
  {
    method: 'POST',
    path: '/auth/login',
    handler: loginController
  },
  {
    method: 'POST',
    path: '/auth/signup',
    handler: signupController
  }
]
