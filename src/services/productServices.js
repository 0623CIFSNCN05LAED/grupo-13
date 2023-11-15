// const db = require('../data/db');
const { Products } = require('../database/models');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const productServices = {
  getAllProducts: () => {
    return Products.findAll();
  },
  getProduct: (id) => {
    return Products.findByPk(id);
  },
  getProductById: (id) => {
    const product = Products.findByPk(id);
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
