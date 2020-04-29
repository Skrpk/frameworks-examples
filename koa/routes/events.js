const router = require('koa-router')();

const authCheck = require('./auth-check-middleware');

const {
  createEventController,
  eventsController
} = require('../controllers/events.controller');

router.post('/', authCheck, createEventController);

router.get('/', eventsController);

module.exports = router;
