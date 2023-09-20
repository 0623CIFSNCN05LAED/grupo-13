const products = require('../data/products');

const productServices = {
  getAllProducts: () => {
    return products;
  },
  getProduct: () => {
    return products.find((product) => product.id == id);
  },
};

module.exports = productServices;
