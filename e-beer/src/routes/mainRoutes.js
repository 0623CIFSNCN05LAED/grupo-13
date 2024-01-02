const express = require('express');
const mainRouter = express.Router();

/* Middlewares */
const ageAuth = require('../middlewares/age-auth');
const ageInCookie = require('../middlewares/age-cookie');

/* Controllers */
const mainController = require('../controllers/mainController');

/* Routes */
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
const apiRouter = require('./api/mainRoutes');
mainRouter.use('/api', apiRouter);

module.exports = mainRouter;
