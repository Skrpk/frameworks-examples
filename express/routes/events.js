const { Router } = require('express');
const { check, validationResult } = require('express-validator');

const authCheck = require('./auth-check-middleware');
const {
  getEventsController,
  createEventController
} = require('../controllers/events.controller');

const router = Router();

router.get('/', getEventsController);

router.post(
  '/',
  authCheck,
  [
    check('title').isLength({ min: 5 }),
    check('description').isLength({ min: 5 }),
    check('date').isLength({ min: 5 }),
    check('price').isNumeric(),
  ],
  createEventController
);

module.exports = router;
