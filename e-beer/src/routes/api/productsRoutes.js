const express = require('express');
const apiProducts = express.Router();

const apiProductsController = require('../../controllers/api/productsController');

apiProducts.get('/', apiProductsController.list);
apiProducts.get('/:id', apiProductsController.detail);
apiProducts.get('/:id/image', apiProductsController.image);

module.exports = apiProducts;
