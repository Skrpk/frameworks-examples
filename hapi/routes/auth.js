module.exports = [
  {
    method: 'POST',
    path: '/auth/login',
    handler: (req,) => {
      return req.dbContext.users;
    }
  },
  {
    method: 'POST',
    path: '/auth/signup',
    handler: (req) => {
      return req.dbContext.users;
    }
  }
]
