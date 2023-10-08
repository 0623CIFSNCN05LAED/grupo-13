const express = require('express'); // requerir el paquete express
const productsRouter = express.Router(); // almacenando en una variable las funciones de rutas (get, post, put, delete)
const multer = require('multer');
const path = require('path');
const productsController = require('../controllers/productsController'); // vincula el router con el controlador

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../public/images/products'),
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

/* PRODUCT LIST */
productsRouter.get('/', productsController.index);

/* CRUD */
productsRouter.get('/crud', productsController.productCrud); // tabla de edicion de productos cuando se ingresa con perfil admin

/* PRODUCT ADD FORM */
productsRouter.get('/create', productsController.addForm); // muestra el formulario ADD PRODUCT
productsRouter.post(
  '/create',
  upload.single('productPicture'),
  productsController.store
); // URL que contiene la info del producto creado con ADD FORM al enviar

/* PRODUCT CART */
productsRouter.get('/cart', productsController.productCart);
productsRouter.get('/cart-filled', productsController.productCartFilled);

/* PRODUCT DELETE FORM */
productsRouter.get('/:id/delete', productsController.deleteForm); // muestra el formulario DELETE PRODUCT
productsRouter.delete('/:id/delete', productsController.destroy); // EDIT-FORM url que contiene la info enviada por el formulario de edit product al eliminar

/* PRODUCT DETAIL */
productsRouter.get('/:id', productsController.detail); // Segun el ID ingresado la URL

/* PRODUCT EDIT FORM */
productsRouter.get('/:id/edit', productsController.editForm); // muestra el formulario EDIT-FORM segun el ID
productsRouter.put(
  '/:id/edit',
  upload.single('productPicture'),
  productsController.update
); // url que va a contener la info enviada por el formulario de EDIT PRODUCT al presionar enviar

// productsRouter.put('/detail/:id', productsController.productEditPut);

module.exports = productsRouter;
