async function events() {
  const events = await db.Event.scope('withUser').findAll({
    include: [{
      model: db.User.scope('withEvents'),
      as: 'user'
    }]
  });

  return events.map(event => transformEvent(event));
}

async function createEvent({ title, description, price, date }, userId) {
  if (!req.isAuth) {
    throw new Error('Unauthenticated');
  }

  const event = await db.Event.create({
    title,
    description,
    price,
    date,
    userId
  });

  return await db.Event.scope('withUser').findByPk(event.id);
}

module.exports = {
  login,
  signup
}