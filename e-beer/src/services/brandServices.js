const { Brand } = require('../database/models');

module.exports = {
  getAllBrands: () => {
    return Brand.findAll();
  },
  getBrand: (id) => {
    return Brand.findByPk(id);
  },
};
