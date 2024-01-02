const productServices = require('../services/productServices');

const productsController = {
  index: (req, res) => {
    productServices.getAllProducts().then((products) => {
      res.render('products-list', { products });
    });
  },
  detail: async (req, res) => {
    const id = req.params.id;
    await productServices
      .getProductDetail(id)
      .then((product) => {
        res.render('product-detail', { product });
      })
      .catch(function (e) {
        res.status(404).redirect('/products');
      });
  },
  createForm: (req, res) => {
    const errors = req.session.errors;
    const oldData = req.session.oldData;

    req.session.oldData = null;
    req.session.oldData = null;

    res.render('product-create-form', {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
  },
  store: async (req, res) => {
    await productServices.createProduct(req.body, req.file).then(() => {
      res.redirect('/products/dashboard');
    });
  },
  updateForm: async (req, res) => {
    const id = req.params.id;
    const product = await productServices.getProduct(id);
    res.render('product-update-form', { product });
  },
  update: async (req, res) => {
    const id = req.params.id;
    await productServices.updateProduct(id, req.body, req.file);
    res.redirect('/products/dashboard');
  },
  deleteForm: (req, res) => {
    const id = req.params.id;
    productServices.getProduct(id).then((product) => {
      res.render('product-delete-form', { product });
    });
  },
  destroy: (req, res) => {
    const id = req.params.id;
    productServices.deleteProduct(id).then(() => {
      res.redirect('/products/dashboard');
    });
  },
  dashboard: (req, res) => {
    productServices.getAllProducts().then((products) => {
      res.render('product-dashboard', { products });
    });
  },
  productCart: (req, res) => {
    res.render('product-cart');
  },
  productCartFilled: (req, res) => {
    res.render('product-cart-filled');
  },
};

module.exports = productsController;
