const { Role } = require('../database/models');

module.exports = {
  getAllRoles: () => {
    return Role.findAll();
  },
  getRole: (id) => {
    return Role.findByPk(id);
  },
};
