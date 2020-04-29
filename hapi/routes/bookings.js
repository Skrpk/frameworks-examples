const {
  getBookingsController,
  bookEventController,
  cancelBookingController
} = require('../controllers/bookings.controller');

const { getCreateValidator, getDeleteValidator } = require('../validations/booking.validation');

module.exports = [
  {
    method: 'GET',
    path: '/bookings',
    options: {
      auth: 'jwt'
    },
    handler: getBookingsController
  },
  {
    method: 'POST',
    path: '/bookings',
    options: {
      auth: 'jwt',
      validate: getCreateValidator()
    },
    handler: bookEventController
  },
  {
    method: 'DELETE',
    path: '/bookings',
    options: {
      auth: 'jwt',
      validate: getDeleteValidator()
    },
    handler: cancelBookingController
  }
]
