const products = require('../data/products/products');

const productServices = {
  getAllProducts: () => {
    return products;
  },
  getProduct: (id) => {
    return products.find((product) => product.id == id);
  },
};

module.exports = productServices;
