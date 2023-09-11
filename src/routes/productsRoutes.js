const express = require('express');

const productsRouter = express.Router();
const productsController = require('../controllers/productsController');

productsRouter.get('/', productsController.products); // product list
productsRouter.get('/create', productsController.productAddForm); // product add form
productsRouter.get('/:id', productsController.productDetail); // product detail segun el ID ingresado en url
productsRouter.post('/', productsController.productAddPost); // url que contiene la info enviada por el formulario de add form
productsRouter.get('/:id/edit', productsController.productEditForm); // product edit form
productsRouter.put('/:id', productsController.productEditPut); // url que contiene la info enviada por el formulario de edit product al editar
productsRouter.delete('/:id', productsController.productEditDelete); // url que contiene la info enviada por el formulario de edit product al eliminar
productsRouter.get('/crud', productsController.productCrud); // tabla de edicion de productos cuando se ingresa con perfil admin

productsRouter.get('/cart', productsController.productCart);
productsRouter.get('/cart-filled', productsController.productCartFilled);
productsRouter.get('/product-form', productsController.productForm); // pagina de validacion para ingresar a edit form o al add form

module.exports = productsRouter;
