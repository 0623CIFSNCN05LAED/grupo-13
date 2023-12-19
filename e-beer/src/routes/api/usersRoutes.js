const express = require('express');
const apiUsers = express.Router();

const apiUsersController = require('../../controllers/api/usersController');

apiUsers.get('/', apiUsersController.list);
apiUsers.get('/:id', apiUsersController.detail);
apiUsers.get('/:id/image', apiUsersController.image);

module.exports = apiUsers;
