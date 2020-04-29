const jwt = require('jsonwebtoken');

module.exports = async (decoded, request, h) => {
  const user = await request.dbContext.User.findByPk(decoded.userId);

  if (!user) {
    return { isValid: false };
  }

  request.userId = user.id;
  return { isValid: true };
};