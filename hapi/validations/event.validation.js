const Joi = require('@hapi/joi');

function getCreateValidator() {
  return {
    payload: Joi.object({
      title: Joi.string(),
      description: Joi.string(),
      price: Joi.number(),
      date: Joi.string(),
    })
  };
}

module.exports = {
  getCreateValidator
};