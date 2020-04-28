const { Router } = require('express');

const authCheck = require('./auth-check-middleware');
const {
  getEventsController,
  createEventController
} = require('../controllers/events.controller');

const router = Router();

router.get('/', getEventsController);

router.post('/', authCheck, createEventController);

module.exports = router;
