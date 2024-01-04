const express = require('express');
const apiRouter = express.Router();
const apiProductsRouter = require('./productsRoutes');
const apiUsersRouter = require('./usersRoutes.js');

apiRouter.use('/users', apiUsersRouter);
apiRouter.use('/products', apiProductsRouter);

apiRouter.get('/', (req, res) => {
  res.send('Bienvenido a la API de E-Beer');
});

module.exports = apiRouter;
