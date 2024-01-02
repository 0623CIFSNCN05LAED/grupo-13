const express = require('express');
const productsRouter = express.Router();
const productsController = require('../controllers/productsController');

/* Middlewares */
const upload = require('../middlewares/multer-products');
const isAdminMiddleware = require('../middlewares/is-admin');

// Create validations
const createValidations = require('../validations/productsCreate');
const createValidateForm = require('../middlewares/products/validate-products-create');

// Update validations
const updateValidations = require('../validations/productsUpdate');
const updateValidateForm = require('../middlewares/products/validate-products-update');

/* Routes */

// Products list
productsRouter.get('/', productsController.index);

// Product cart
productsRouter.get('/cart', productsController.productCart);
productsRouter.get('/cart-filled', productsController.productCartFilled);

// Products Dashboard
productsRouter.get(
  '/dashboard',
  isAdminMiddleware,
  productsController.dashboard
);
// Create product
productsRouter.get('/create', isAdminMiddleware, productsController.createForm);
productsRouter.post(
  '/create',
  upload.single('image'),
  createValidations,
  createValidateForm,
  productsController.store
);
// Delete product
productsRouter.get(
  '/:id/delete',
  isAdminMiddleware,
  productsController.deleteForm
);
productsRouter.delete('/:id/delete', productsController.destroy);

// Product detail
productsRouter.get('/:id', productsController.detail);

// Product update
productsRouter.get(
  '/:id/edit',
  isAdminMiddleware,
  productsController.updateForm
);

productsRouter.put(
  '/:id/edit',
  upload.single('image'),
  updateValidations,
  updateValidateForm,
  productsController.update
);

module.exports = productsRouter;
