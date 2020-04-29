const {
  loginController,
  signupController
} = require('../controllers/auth.controller');

const { getCreateValidator } = require('../validations/user.validation');

module.exports = [
  {
    method: 'POST',
    path: '/auth/login',
    handler: loginController,
    options: {
      validate: getCreateValidator()
    }
  },
  {
    method: 'POST',
    path: '/auth/signup',
    handler: signupController,
    options: {
      validate: getCreateValidator()
    }
  }
]
