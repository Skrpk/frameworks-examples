const {
  bookings,
  bookEvent,
  cancelBooking
} = require('../services/bookings.service');

async function getBookingsController(req) {
  return await bookings(req.dbContext);
}

async function bookEventController(req) {
  return await bookEvent(req.payload.eventId, req.userId, req.dbContext);
}

async function cancelBookingController(req) {
  return await cancelBooking(req.payload.bookingId, req.dbContext);
}

module.exports = {
  getBookingsController,
  bookEventController,
  cancelBookingController
}
