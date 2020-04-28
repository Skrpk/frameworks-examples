const jwt = require('jsonwebtoken');

async function login(email, password, dbContext) {
  const user = await dbContext.User.findOne({ where: { email } });

  if (!user || !user.correctPassword(password)) {
    throw new Error('Invalid creds');
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
    userId: user.id,
    token,
    tokenExpiration: 1
  };
}

async function signup(email, password, dbContext) {
  return await dbContext.User.create({ email, password });
}

module.exports = {
  login,
  signup
}