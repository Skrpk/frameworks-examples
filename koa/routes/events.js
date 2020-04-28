const router = require('koa-router')();

const {
  createEvent,
  getEvents,
  bookEvent
} = require('../controllers/events.controller');

router.post('/event', createEvent);

router.get('/events', getEvents);

router.post('/book-event', bookEvent);

module.exports = router;
