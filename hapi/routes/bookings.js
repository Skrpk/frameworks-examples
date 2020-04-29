const {
  getBookingsController,
  bookEventController,
  cancelBookingController
} = require('../controllers/bookings.controller');


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
      auth: 'jwt'
    },
    handler: bookEventController
  },
  {
    method: 'DELETE',
    path: '/bookings',
    options: {
      auth: 'jwt'
    },
    handler: cancelBookingController
  }
]
