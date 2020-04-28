const {
  events,
  createEvent
} = require('../services/event.service');

async function getEventsController(req, res) {
  const result = await events(req.dbContext);

  res.send(result);
}

async function createEventController(req, res) {
  const result = await createEvent(req.body, req.userId, req.dbContext);

  res.send(result);
}


module.exports = {
  getEventsController,
  createEventController
}
