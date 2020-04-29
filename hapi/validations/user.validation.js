const Joi = require('@hapi/joi');

function getCreateValidator() {
  return {
    payload: Joi.object({
      email: Joi.string(),
      password: Joi.string()
    })
  };
}

module.exports = {
  getCreateValidator
};