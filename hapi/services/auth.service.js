const jwt = require('jsonwebtoken');

function login(email, password, dbContext) {
  const user = dbContext.findUserByEmail(email);

  if (user.password !== password) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign(
    {
      email: user.email,
    },
    'mysecretsuperkey',
    {
      expiresIn: '1h'
    }
  );

  return {
    user,
    token
  };
}

function signup(email, password, dbContext) {
  dbContext.addUser({ email, password });
  return { email };
}

module.exports = {
  login,
  signup
}