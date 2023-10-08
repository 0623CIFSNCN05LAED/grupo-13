// Require's
const express = require('express');
const mainRouter = express.Router();

// Controller require
const mainController = require('../controllers/mainController');

// Main routes
mainRouter.get('/', mainController.comingAge);
mainRouter.get('/home', mainController.index);
mainRouter.get('/contact', mainController.contact);
mainRouter.get('/about-us', mainController.aboutUs);
mainRouter.get('/tyc', mainController.tyc);
mainRouter.get('/coming-age-no', mainController.comingAgeNo);

// Products routes
const productsRoutes = require('./productsRoutes.js');
mainRouter.use('/products', productsRoutes);

// Users routes
const usersRoutes = require('./usersRoutes.js');
mainRouter.use('/users', usersRoutes);

module.exports = mainRouter;
