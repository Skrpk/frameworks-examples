const { Router } = require('express');

const authCheck = require('./auth-check-middleware');

const {
  getBookingsController,
  bookEventController,
  cancelBookingController
} = require('../controllers/bookings.controller');

const router = Router();

router.get('/', authCheck, getBookingsController);

router.post('/', authCheck, bookEventController);

router.delete('/', authCheck, cancelBookingController);

module.exports = router;
