const express = require('express');
const api = express.Router();
// const apiProductsRouter = require('./productsRoutes');
const apiUsersRouter = require('./usersRoutes.js');

api.use('/users', apiUsersRouter);
// api.use('/products', apiProductsRouter);

api.get('/', (req, res) => {
  res.send('Bienvenido a la API de e-Beer');
});

module.exports = api;
