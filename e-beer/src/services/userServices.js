const { Users } = require('../database/models');
const { v4: uuidv4 } = require('uuid');
const bcryptjs = require('bcryptjs');

const userServices = {
  getAllUsers: async () => {
    return await Users.findAll();
  },
  getAllUsersAndCount: ({ pageSize, offset }) => {
    return Users.findAndCountAll({
      limit: pageSize,
      offset: offset,
    });
  },
  getUser: async (id) => {
    return await Users.findByPk(id);
  },
  getUserByEmail: async (query) => {
    const user = await Users.findOne({
      where: {
        email: query,
      },
    });
    return user;
  },
  createUser: (body, file) => {
    return Users.create({
      id: uuidv4(),
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      password: bcryptjs.hashSync(body.password, 10),
      contact_number: Number(body.contact_number),
      birth_date: body.birth_date,
      address: body.address,
      profile_picture: file ? file.filename : 'default-image.jpg',
      role_id: body.email.includes('@ebeer.com') ? 1 : 2,
    });
  },
  updateProfile: async (id, body, file) => {
    const user = await Users.findByPk(id);

    return await Users.update(
      {
        id: user.id,
        email: body.email ? body.email : user.email,
        profile_picture: file ? file.filename : user.profile_picture,
        contact_number: body.contact_number
          ? Number(body.contact_number)
          : Number(user.contact_number),
        address: body.address ? body.address : user.adress,
      },
      {
        where: { id: id },
      }
    );
  },
  updateUser: async (id, user) => {
    return await Users.update(
      {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        contact_number: Number(user.contact_number),
        address: user.address,
        birth_date: user.birth_date,
      },
      {
        where: { id: id },
      }
    );
  },
  updatePassword: async (id, body) => {
    const user = await Users.findByPk(id);

    return await Users.update(
      {
        id: user.id,
        password: bcryptjs.hashSync(body.password, 10),
      },
      {
        where: { id: id },
      }
    );
  },
  deleteUser: (id) => {
    return Users.destroy({
      where: { id: id },
    });
  },
};

module.exports = userServices;
