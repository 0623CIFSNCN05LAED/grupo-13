const productServices = require('../services/productServices');
const categoryServices = require('../services/categoryServices');
const brandServices = require('../services/brandServices');
const sizeServices = require('../services/sizeServices');

const productsController = {
  index: (req, res) => {
    productServices.getAllProducts().then((products) => {
      res.render('products', { products });
    });
  },
  detail: async (req, res) => {
    const id = req.params.id;
    await productServices.getProduct(id).then((product) => {
      res.render('product-detail', { product });
    });
  },
  // create
  addForm: (req, res) => {
    res.render('product-add-form');
  },
  store: (req, res) => {
    productServices.createProduct(req.body, req.file).then((product) => {
      res.redirect('/products/' + product.id);
    });
  },
  // edit
  editForm: async (req, res) => {
    const id = req.params.id;
    const product = await productServices.getProduct(id);
    const image = req.file ? req.file.filename : product.image;
    product.image = image;
    // productServices.updateProduct(id, product, image);
    res.render('product-edit-form', { product });
  },
  update: (req, res) => {
    productServices.updateProduct(req.params.id, req.body).then((product) => {
      res.redirect('/products/' + req.params.id);
    });
  },
  // delete
  deleteForm: (req, res) => {
    const id = req.params.id;
    const product = productServices.getProduct(id);
    res.render('product-delete-form', { product });
  },
  destroy: (req, res) => {
    const id = req.params.id;
    productServices.deleteProduct(id);
    res.redirect('/products/crud');
  },
  productCrud: (req, res) => {
    const products = productServices.getAllProducts();
    res.render('product-crud', { products });
  },
  productCart: (req, res) => {
    res.render('product-cart');
  },
  productCartFilled: (req, res) => {
    res.render('product-cart-filled');
  },
  productForm: (req, res) => {
    res.render('product-form');
  },
};

module.exports = productsController;
