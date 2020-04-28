const {
  login,
  signup
} = require('../services/auth.service');

function loginController(req, res) {
  const result = login(req.body.email, req.body.password, req.dbContext);
  res.send(result);
}

function signupController(req, res) {
  const result = signup(req.body.email, req.body.password, req.dbContext);
  res.send(result);
}

module.exports = {
  loginController,
  signupController,
}
