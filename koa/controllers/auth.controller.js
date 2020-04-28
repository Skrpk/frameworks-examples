const {
  login,
  signup
} = require('../services/auth.service');

function loginController(ctx, next) {
  ctx.body = login(ctx.request.body.email, ctx.request.body.password, ctx.dbContext);
}

function signupController(ctx, next) {
  ctx.body = signup(ctx.request.body.email, ctx.request.body.password, ctx.dbContext);
}

module.exports = {
  loginController,
  signupController,
}
