const userServices = require('../../services/userServices');
const roleServices = require('../../services/roleServices');
const fs = require('fs');
const path = require('path');

const pageSize = 5;

module.exports = {
  list: async (req, res) => {
    const page = Number(req.query.page) || 1;
    const offset = (page - 1) * pageSize;
    const users = await userServices.getAllUsers();
    const roles = await roleServices.getAllRoles();

    const response = {
      meta: {
        status: 200,
        url: `${req.originalUrl}`,
      },
      total: {
        count: users.length,
        countByRoles: roles.length,
      },
      data: users.map((user) => ({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        detail: `${req.protocol}://${req.get('host')}/api/users/${user.id}`,
      })),
    };
    res.json(response);
  },
  detail: async (req, res) => {
    const user = await userServices.getUser(req.params.id);

    const safeUser = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      profile_picture: user.profile_picture,
      image: req.originalUrl + '/image',
    };

    res.json({
      meta: {
        status: 200,
        url: req.originalUrl,
      },
      data: safeUser,
    });
  },
  image: async (req, res) => {
    const user = await userServices.getUser(req.params.id);
    const filePath = path.join(
      __dirname,
      '../../../public/images/users',
      user.profile_picture
    );

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error(`File ${filePath} does not exist`);
        return;
      }

      res.sendFile(filePath);
    });
  },
};
