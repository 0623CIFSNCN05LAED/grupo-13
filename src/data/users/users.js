const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  getUsers: function () {
    const usersPath = path.join(__dirname, './users.json');
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    return users;
  },
  saveUsers: function (users) {
    const usersDBPath = path.join(__dirname, './users.json');
    fs.writeFileSync(usersDBPath, JSON.stringify(users, null, 2));
  },
  findAll: function () {
    return this.getUsers();
  },
  findById: function (id) {
    const user = this.findAll().find((user) => user.id == id);
    return user;
  },
  findByField: function (field, text) {
    const users = this.findAll();
    const userByField = users.find((user) => user[field] == text);
    return userByField;
  },
  create: function (user) {
    const users = this.getUsers();
    const newUser = {
      id: uuidv4(),
      accessType: user.email.includes('@ebeer.com') ? 'admin' : 'user',
      ...user,
    };
    users.push(newUser);
    this.saveUsers(users);
  },
  createAdmin: function (user) {
    const users = this.getUsers();
    const newUser = {
      id: uuidv4(),
      accessType: user.email.includes('@ebeer.com') ? 'admin' : 'user',
      profilePicture: 'default-image.jpg',
      ...user,
    };
    users.push(newUser);
    this.saveUsers(users);
  },
  update: function (id, user) {
    const users = this.getUsers();
    const userToEdit = users.find((user) => user.id == id);
    Object.assign(userToEdit, user);
    this.saveUsers(users);
    return user;
  },
  delete: function (id) {
    const users = this.getUsers();
    const nonDeletedUsers = users.filter((user) => user.id != id);
    this.saveUsers(nonDeletedUsers);
  },
};
