const express = require('express')

const productsRouter = express.Router()
const productsController = require('../controllers/productsController')

productsRouter.get('/cart', productsController.productCart)
productsRouter.get('/cart-filled', productsController.productCartFilled)
productsRouter.get('/detail', productsController.productDetail)
productsRouter.get('/list', productsController.productList)
productsRouter.get('/list', productsController.productAddForm)

module.exports = productsRouter
