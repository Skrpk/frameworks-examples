const Joi = require('@hapi/joi');

function getCreateValidator() {
  return {
    payload: Joi.object({
      eventId: Joi.string()
    })
  };
}

function getDeleteValidator() {
  return {
    payload: Joi.object({
      bookingId: Joi.string()
    })
  };
}

module.exports = {
  getCreateValidator,
  getDeleteValidator
};