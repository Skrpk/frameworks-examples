class DBContextProvider {
  users = [];
  events = [];

  constructor(dbName) {
    this.dbName = dbName;
  }

  addUser(user) {
    if (!user.email || !user.password) {
      throw new Error('Input data missed');
    }

    // email and password regEx match check

    this.users.push(user);
  }

  addEvent(event, userId) {
    if (!event.title || !event.description || !event.owner) {
      throw new Error('Input data missed');
    }

    this.events.push(event);
  }
}

module.exports = DBContextProvider;
