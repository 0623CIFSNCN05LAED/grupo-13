const express = require('express');

const productsRouter = express.Router();
const productsController = require('../controllers/productsController');

productsRouter.get('/product-cart', productsController.productCart);
productsRouter.get('/product-cart-filled', productsController.productCartFilled);
productsRouter.get('/product-detail', productsController.productDetail);
productsRouter.get('/product-list', productsController.productList);

module.exports = productsRouter;