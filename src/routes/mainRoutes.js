const express = require('express');

const mainRouter = express.Router();
const mainController = require('../controllers/mainController');

mainRouter.get('/', mainController.comingAge);
mainRouter.get('/home', mainController.index);
mainRouter.get('/contact', mainController.contact);
mainRouter.get('/about-us', mainController.aboutUs);
mainRouter.get('/tyc', mainController.tyc);

module.exports = mainRouter;