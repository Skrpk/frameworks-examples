const router = require('koa-router')();

const authCheck = require('./auth-check-middleware');

const {
  getBookingsController,
  bookEventController,
  cancelBookingController
} = require('../controllers/bookings.controller');

router.get('/', authCheck, getBookingsController);

router.post('/', authCheck, bookEventController);

router.delete('/', authCheck, cancelBookingController);

module.exports = router;
