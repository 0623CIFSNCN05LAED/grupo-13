const express = require('express');
const apiUsers = express.Router();

const apiUsersController = require('../../controllers/api/usersController');

apiUsers.get('/', apiUsersController.list);

module.exports = apiUsers;
