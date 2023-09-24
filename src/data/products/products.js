const fs = require('fs'); // filesystem
const path = require('path');

module.exports = {
  getProducts: function () {
    const productsPath = path.join(__dirname, './products.json');
    const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8')); // leer JSON
    return products;
  },
  findAll: function () {
    return this.getProducts();
  },
  findById: function (id) {
    const product = this.getProducts().find((product) => product.id == id);
    return product;
  },
  create: function (product) {
    console.log(`Creating product ${product.name}`);
    return product;
  },
  update: function (id, product) {
    console.log(`Updating product ${product.name}`);
    return product;
  },
  delete: function (id) {
    console.log(`Deleting product with id ${id}`);
  },
};
