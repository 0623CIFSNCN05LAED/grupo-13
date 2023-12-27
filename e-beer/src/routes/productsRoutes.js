const express = require('express');
const productsRouter = express.Router();
const productsController = require('../controllers/productsController');

/* Middlewares */
const upload = require('../middlewares/multer-products');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Create validations
const createValidations = require('../validations/productsCreate');
const createValidateForm = require('../middlewares/validate-products-create');

// Update validations
const updateValidations = require('../validations/productsUpdate');
const updateValidateForm = require('../middlewares/validate-products-update');

/* PRODUCT LIST */
productsRouter.get('/', productsController.index);

/* CRUD */
productsRouter.get('/crud', adminMiddleware, productsController.productCrud);

/* PRODUCT ADD FORM */
productsRouter.get('/create', adminMiddleware, productsController.addForm);
productsRouter.post(
  '/create',
  upload.single('image'),
  createValidations,
  createValidateForm,
  productsController.store
);

/* PRODUCT CART */
productsRouter.get('/cart', productsController.productCart);
productsRouter.get('/cart-filled', productsController.productCartFilled);

/* PRODUCT DELETE FORM */
productsRouter.get(
  '/:id/delete',
  adminMiddleware,
  productsController.deleteForm
);
productsRouter.delete('/:id/delete', productsController.destroy);

/* PRODUCT DETAIL */
productsRouter.get('/:id', productsController.detail);

/* PRODUCT EDIT FORM */
productsRouter.get('/:id/edit', adminMiddleware, productsController.editForm);

productsRouter.put(
  '/:id/edit',
  upload.single('image'),
  updateValidations,
  updateValidateForm,
  productsController.update
);

module.exports = productsRouter;
