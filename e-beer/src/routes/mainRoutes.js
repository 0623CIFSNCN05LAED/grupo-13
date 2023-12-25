// Require's
const express = require('express');
const mainRouter = express.Router();
const ageAuth = require('../middlewares/ageAuthMiddleware');
const ageInCookie = require('../middlewares/ageInCookie');
const apiRouter = require('./api/mainRoutes');

// Controller require
const mainController = require('../controllers/mainController');

// Main routes

//comingAge
mainRouter.get('/', ageInCookie, mainController.comingAgeForm);
mainRouter.post('/', mainController.comingAge);

mainRouter.get('/home', ageAuth, mainController.index);
mainRouter.get('/contact', ageAuth, mainController.contact);
mainRouter.get('/about-us', ageAuth, mainController.aboutUs);
mainRouter.get('/tyc', mainController.tyc);
mainRouter.get('/coming-age-no', mainController.comingAgeNo);

// Products routes
const productsRoutes = require('./productsRoutes.js');
mainRouter.use('/products', ageAuth, productsRoutes);

// Users routes
const usersRoutes = require('./usersRoutes.js');
mainRouter.use('/users', ageAuth, usersRoutes);

// API routes

mainRouter.use('/api', apiRouter);

module.exports = mainRouter;
