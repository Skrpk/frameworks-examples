const {
  getEventsController,
  createEventController
} = require('../controllers/events.controller');

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
      auth: 'jwt'
    },
    handler: createEventController
  }
]