const fs = require('fs'); // filesystem
const path = require('path');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  getProducts: function () {
    const productsPath = path.join(__dirname, './products.json');
    const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8')); // leer JSON
    return products;
  },
  saveProducts: function (products) {
    const productsDBPath = path.join(__dirname, './products.json');
    fs.writeFileSync(productsDBPath, JSON.stringify(products, null, 2));
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
    const products = this.getProducts();
    const newProduct = {
      id: uuidv4(),
      ...product,
    };
    products.push(newProduct);
    this.saveProducts(products);
  },
  update: function (id, product) {
    console.log(`Updating product ${product.name}`);
    return product;
  },
  delete: function (id) {
    console.log(`Deleting product with id ${id}`);
  },
};
