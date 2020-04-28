const formatDate = date => new Date(date).toISOString();

const transformBooking = booking => ({
  ...booking,
  ...{
    createdAt: formatDate(booking.createdAt),
    updatedAt: formatDate(booking.updatedAt),
  }
});

async function bookings() {
  try {
    const bookings = await db.Booking.scope('withModels').findAll();

    return bookings.map(booking => transformBooking(booking));
  } catch (err) {
    throw err;
  }
}

async function bookEvent(args, req) {
  if (!req.isAuth) {
    throw new Error('Unauthenticated');
  }

  const booking = await db.Booking.create({
    eventId: args.eventId,
    userId: 'e3a674de-34ea-42a9-9685-4bd91917b072'
  });

  return await db.Booking.scope('withModels').findByPk(booking.id);
}

async function cancelBooking(args, req) {
  if (!req.isAuth) {
    throw new Error('Unauthenticated');
  }

  const booking = await db.Booking.scope('withModels').findByPk(args.bookingId);
  const event = booking.event;

  await booking.destroy();

  return event;
}

module.exports = {
  bookings,
  bookEvent,
  cancelBooking
};
