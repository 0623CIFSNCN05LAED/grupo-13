const express = require('express');

const productsRouter = express.Router();
const productsController = require('../controllers/productsController');

/* PRODUCT LIST */
productsRouter.get('/', productsController.products);

/* PRODUCT DETAIL */
productsRouter.get('/detail/:id', productsController.productDetail); // Segun el ID ingresado la URL

/* PRODUCT ADD FORM */
productsRouter.get('/create', productsController.addForm); // muestra el formulario ADD PRODUCT
productsRouter.post('/create', productsController.create); // URL que contiene la info del producto creado con ADD FORM al enviar
productsRouter.get('/:id/edit', productsController.editProduct); // muestra el formulario EDIT-FORM segun el ID
productsRouter.put('/:id/edit', productsController.productEditPut); // url que va a contener la info enviada por el formulario de EDIT PRODUCT al presionar enviar

// productsRouter.put('/detail/:id', productsController.productEditPut);

productsRouter.delete('/:id', productsController.productEditDelete); // EDIT-FORM url que contiene la info enviada por el formulario de edit product al eliminar

productsRouter.get('/crud', productsController.productCrud); // tabla de edicion de productos cuando se ingresa con perfil admin

productsRouter.get('/cart', productsController.productCart);
productsRouter.get('/cart-filled', productsController.productCartFilled);
productsRouter.get('/product-form', productsController.productForm); // pagina de validacion para ingresar a edit form o al add form

module.exports = productsRouter;
