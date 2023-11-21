const { Users } = require('../database/models');
const { v4: uuidv4 } = require('uuid');
const Sequelize = require('sequelize');

const userServices = {
  getAllUsers: () => {
    return Users.findAll();
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
    console.log('Creando usuario');
    return Users.create({
      id: uuidv4(),
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      password: body.password,
      contact_number: Number(body.contact_number),
      birth_date: body.birth_date,
      address: body.address,
      profile_picture: file ? file.filename : 'default-image.png',
      role_id: body.email.includes('@ebeer.com') ? 1 : 2,
    });
  },
  createUserAdmin: (user) => {
    if (!user.role_id) {
      user.role_id = 'user';
    }
    const newUser = {
      id: uuidv4(),
      role_id: user.email.includes('@ebeer.com') ? 'admin' : 'user',
      ...user,
    };
    return Users.create({
      newUser,
    });
  },
  updateUser: async (id, body, file) => {
    console.log('Updating user');
    const user = await Users.findByPk(id);
    const profile_picture = file ? file.filename : user.profile_picture;
    return Users.update(
      {
        id: id,
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        password: body.password,
        contact_number: Number(body.contact_number),
        birth_date: body.birth_date,
        address: body.address,
        profile_picture: profile_picture,
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
