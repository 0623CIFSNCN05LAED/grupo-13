const { Category } = require('../database/models');

module.exports = {
  getAllCategories: () => {
    return Category.findAll();
  },
  getCategory: (id) => {
    return Category.findByPk(id);
  },
};
