const {
  getEventsController,
  createEventController
} = require('../controllers/events.controller');

const { getCreateValidator } = require('../validations/event.validation');

module.exports = [
  {
    method: 'GET',
    path: '/events',
    handler: getEventsController
  },
  {
    method: 'POST',
    path: '/events',
    options: {
      auth: 'jwt',
      validate: getCreateValidator()
    },
    handler: createEventController
  }
]