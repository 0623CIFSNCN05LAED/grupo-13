const db = require('../data/db');

const userServices = {
  getAllUsers: () => {
    return db.users.findAll();
  },
  getUser: (id) => {
    return db.users.findById(id);
  },
  getUserById: (id) => {
    const user = db.users.findById(id);
    return user;
  },
  createUser: (user) => {
    db.users.create(user);
  },
  updateUser: (id, user) => {
    db.users.update(id, user);
  },
};

module.exports = userServices;
