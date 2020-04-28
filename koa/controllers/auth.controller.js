function loginController(ctx, next) {
  ctx.body = 'login';
}

function signupController(ctx, next) {
  ctx.body = 'signup';
}

module.exports = {
  loginController,
  signupController,
}
