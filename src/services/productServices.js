const db = require('../data/db');

const productServices = {
  getAllProducts: () => {
    return db.products.findAll();
  },
  getProduct: (id) => {
    return db.products.findById(id);
  },

  getProductById: (id) => {
    const product = db.products.findById(id);
    return product;
  },
  createProduct: (product) => {
    db.products.create(product);
  },
  updateProduct: (id, product) => {
    db.products.update(id, product);
  },
  deleteProduct: (id) => {
    db.products.delete(id);
  },
};

module.exports = productServices;
