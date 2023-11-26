const express = require('express');
const productsRouter = express.Router();
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/multer-products');

// Middlewares
const authMiddleware = require('../middlewares/authMiddleware');

// Create validations
const createValidations = require('../validations/productsCreate');
const createValidateForm = require('../middlewares/validate-products-create');

// Update validations
const updateValidations = require('../validations/productsUpdate');
const updateValidateForm = require('../middlewares/validate-products-update');

/* PRODUCT LIST */
productsRouter.get('/', productsController.index);

/* CRUD */
productsRouter.get('/crud', authMiddleware, productsController.productCrud);

/* PRODUCT ADD FORM */
productsRouter.get('/create', authMiddleware, productsController.addForm);
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
  authMiddleware,
  productsController.deleteForm
);
productsRouter.delete('/:id/delete', productsController.destroy);

/* PRODUCT DETAIL */
productsRouter.get('/:id', productsController.detail);

/* PRODUCT EDIT FORM */
productsRouter.get('/:id/edit', productsController.editForm);

productsRouter.put(
  '/:id/edit',
  upload.single('image'),
  updateValidations,
  updateValidateForm,
  productsController.update
);

module.exports = productsRouter;
