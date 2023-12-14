const { Size } = require('../database/models');

module.exports = {
  getAllSizes: () => {
    return Size.findAll();
  },
  getSize: (id) => {
    return Size.findByPk(id);
  },
};
