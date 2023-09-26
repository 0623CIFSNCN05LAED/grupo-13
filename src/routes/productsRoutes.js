const express = require('express'); // requerir el paquete express
const productsRouter = express.Router(); // almacenando en una variable las funciones de rutas (get, post, put, delete)
const productsController = require('../controllers/productsController'); // vincula el router con el controlador

/* PRODUCT LIST */
productsRouter.get('/', productsController.index);

/* CRUD */
productsRouter.get('/crud', productsController.productCrud); // tabla de edicion de productos cuando se ingresa con perfil admin

/* PRODUCT ADD FORM */
productsRouter.get('/create', productsController.addForm); // muestra el formulario ADD PRODUCT
productsRouter.post('/create', productsController.store); // URL que contiene la info del producto creado con ADD FORM al enviar

/* PRODUCT DETAIL */
productsRouter.get('/:id', productsController.detail); // Segun el ID ingresado la URL

/* PRODUCT EDIT FORM */
productsRouter.get('/:id/edit', productsController.editForm); // muestra el formulario EDIT-FORM segun el ID
productsRouter.put('/:id/edit', productsController.update); // url que va a contener la info enviada por el formulario de EDIT PRODUCT al presionar enviar

// productsRouter.put('/detail/:id', productsController.productEditPut);

productsRouter.delete('/:id', productsController.destroy); // EDIT-FORM url que contiene la info enviada por el formulario de edit product al eliminar

productsRouter.get('/cart', productsController.productCart);
productsRouter.get('/cart-filled', productsController.productCartFilled);
productsRouter.get('/product-form', productsController.productForm); // pagina de validacion para ingresar a edit form o al add form

module.exports = productsRouter;
