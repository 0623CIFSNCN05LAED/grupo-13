const userServices = require('../services/userServices');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersController = {
  loginForm: (req, res) => {
    res.render('login');
  },
  login: (req, res) => {
    const userToLogin = userServices.getUserByField('email', req.body.email);

    if (userToLogin) {
      const validPassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (validPassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;
        return res.redirect('/users/myprofile');
      }
      return res.render('login', {
        errors: {
          password: {
            msg: 'El usuario y/o contraseña ingresados son inválidos',
          },
        },
      });
    }

    return res.render('login', {
      errors: {
        email: {
          msg: 'El correo electrónico ingresado es inválido',
        },
      },
    });
  },

  registerForm: (req, res) => {
    const errors = req.session.errors;
    const oldData = req.session.oldData;
    req.session.oldData = null;
    req.session.oldData = null;
    res.render('register', {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
  },
  register: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render('register', {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    const data = req.body;
    const user = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: bcryptjs.hashSync(data.password, 10),
      accessType: data.accessType,
      contactNumber: Number(data.contactNumber),
      birthDate: data.birthDate,
      address: data.address,
      profilePicture: req.file ? req.file.filename : profilePicture,
    };
    const userInDB = userServices.getUserByField('email', req.body.email);

    if (userInDB) {
      return res.render('register', {
        errors: {
          email: {
            msg: 'Este correo electrónico ya ha sido registrado',
          },
        },
        oldData: req.body,
      });
    }

    userServices.createUser(user);
    res.redirect('login');
  },
  myProfile: (req, res) => {
    const id = req.session.userLogged.id;
    const user = userServices.getUser(id);
    return res.render('profile', { user });
  },
  crud: (req, res) => {
    const users = userServices.getAllUsers();
    res.render('users-crud', { users });
  },
  myProfileEdit: (req, res) => {
    const id = req.params.id;
    const user = userServices.getUser(id);
    res.render('profile-edit', { user });
  },
  // myProfileEdit: (req, res) => {
  //   const id = req.params.id;
  //   const user = userServices.getUser(id);
  //   res.render('prueba', { user });
  // }, futuro editor admin
  update: (req, res) => {
    const user = req.body;
    const id = req.params.id;
    const profilePicture = req.file
      ? req.file.filename
      : userServices.getUser(id).profilePicture;
    user.profilePicture = profilePicture;
    userServices.updateUser(id, user);
    res.redirect('/home');
  },
  deleteForm: (req, res) => {
    const id = req.params.id;
    const user = userServices.getUser(id);
    res.render('users-delete-form', { user });
  },
  destroy: (req, res) => {
    const user = req.body;
    const id = req.params.id;
    const profilePicture = req.file
      ? req.file.filename
      : userServices.getUser(id).profilePicture;
    user.profilePicture = profilePicture;
    userServices.deleteUser(id);
    res.redirect('/users/crud');
  },
};

module.exports = usersController;
