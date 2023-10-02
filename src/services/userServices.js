const db = require('../data/db');

const userServices = {
  getAllUsers: () => {
    return db.users.findAll();
  },
  createUser: (user) => {
    db.users.create(user);
  },
};

module.exports = userServices;
