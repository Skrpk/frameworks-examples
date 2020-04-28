const {
  login,
  signup
} = require('../services/auth.service');

function loginController(req) {
  return login(req.payload.email, req.payload.password, req.dbContext);
}

function signupController(req) {
  return signup(req.payload.email, req.payload.password, req.dbContext);
}

module.exports = {
  loginController,
  signupController,
}
