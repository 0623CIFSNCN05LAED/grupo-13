// const db = require('../data/db');
const { Products } = require('../database/models');

const productServices = {
  getAllProducts: () => {
    return Products.findAll();
  },
  getProduct: (id) => {
    return Products.findByPk(id);
  },
  createProduct: (product) => {
    return Products.create(product);
  },
  updateProduct: (id, product) => {
    return Products.update(id, product);
  },
  deleteProduct: (id) => {
    return Products.destroy(id);
  },
};

module.exports = productServices;
