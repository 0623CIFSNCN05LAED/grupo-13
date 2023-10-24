const express = require('express');
const productsRouter = express.Router();
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/products-multer');

// Middlewares
const authMiddleware = require('../middlewares/authMiddleware');

/* PRODUCT LIST */
productsRouter.get('/', productsController.index);

/* CRUD */
productsRouter.get('/crud', authMiddleware, productsController.productCrud);

/* PRODUCT ADD FORM */
productsRouter.get('/create', authMiddleware, productsController.addForm);
productsRouter.post(
  '/create',
  upload.single('productPicture'),
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
productsRouter.get('/:id/edit', authMiddleware, productsController.editForm);

productsRouter.put(
  '/:id/edit',
  upload.single('productPicture'),
  productsController.update
);

module.exports = productsRouter;
