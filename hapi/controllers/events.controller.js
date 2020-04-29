const {
  events,
  createEvent
} = require('../services/event.service');

async function getEventsController(req) {
  return await events(req.dbContext);
}

async function createEventController(req) {
  return await createEvent(req.payload, req.userId, req.dbContext);
}


module.exports = {
  getEventsController,
  createEventController
}
