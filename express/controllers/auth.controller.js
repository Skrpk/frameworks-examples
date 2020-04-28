function loginController(req, res, next) {
  res.send(req.dbContext.users);
  next();
}

function signupController(req, res, next) {
  res.send(req.dbContext.events);
  next();
}

module.exports = {
  loginController,
  signupController,
}
