const express = require('express');

const productsRouter = express.Router();
const productsController = require('../controllers/productsController');

productsRouter.get('/cart', productsController.productCart);
productsRouter.get('/cart-filled', productsController.productCartFilled);
productsRouter.get('/detail', productsController.productDetail);
productsRouter.get('/list', productsController.productList);
productsRouter.get('/add-form', productsController.productAddForm);
productsRouter.get('/edit-form', productsController.productEditForm);
productsRouter.get('/product-form', productsController.productForm);

module.exports = productsRouter;
