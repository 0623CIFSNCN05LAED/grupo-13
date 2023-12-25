const productServices = require('../services/productServices');

const productsController = {
  index: (req, res) => {
    productServices.getAllProducts().then((products) => {
      res.render('products', { products });
    });
  },
  detail: async (req, res) => {
    const id = req.params.id;
    await productServices.getProductDetail(id).then((product) => {
      res.render('product-detail', { product });
    });
  },
  addForm: (req, res) => {
    const errors = req.session.errors;
    const oldData = req.session.oldData;

    req.session.oldData = null;
    req.session.oldData = null;

    res.render('product-add-form', {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
  },
  store: async (req, res) => {
    await productServices.createProduct(req.body, req.file).then((product) => {
      res.redirect('/products/' + product.id);
    });
  },
  editForm: async (req, res) => {
    const id = req.params.id;
    const product = await productServices.getProduct(id);
    res.render('product-edit-form', { product });
  },
  update: async (req, res) => {
    const id = req.params.id;
    await productServices.updateProduct(id, req.body, req.file);
    res.redirect('/products');
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
      res.redirect('/products/crud');
    });
  },
  productCrud: (req, res) => {
    productServices.getAllProducts().then((products) => {
      res.render('product-crud', { products });
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
