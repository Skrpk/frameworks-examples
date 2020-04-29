const {
  login,
  signup
} = require('../services/auth.service');

async function loginController(req) {
  return await login(req.payload.email, req.payload.password, req.dbContext);
}

async function signupController(req) {
  return await signup(req.payload.email, req.payload.password, req.dbContext);
}

module.exports = {
  loginController,
  signupController,
}
