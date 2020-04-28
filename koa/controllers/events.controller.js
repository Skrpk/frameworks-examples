const {
  createEvent,
  getEvents,
  bookEvent
} = require('../services/event.service');

function createEvent(ctx, next) {
  ctx.body = createEvent(ctx.request.body.email, ctx.request.body.password, ctx.dbContext);
}

function getEvents(ctx, next) {
  ctx.body = getEvents(ctx.request.body.email, ctx.request.body.password, ctx.dbContext);
}

function bookEvent(ctx, next) {
  ctx.body = bookEvent(ctx.request.body.email, ctx.request.body.password, ctx.dbContext);
}

module.exports = {
  createEvent,
  getEvents,
  bookEvent
}
