const userServices = require('../services/userServices');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersController = {
  loginForm: (req, res) => {
    res.render('login');
  },
  login: async (req, res) => {
    const userToLogin = await userServices.getUserByEmail(req.body.email);

    console.log(userToLogin);

    if (userToLogin) {
      const validPassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (validPassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if (req.body.rememberMe) {
          res.cookie('email', req.body.email, { maxAge: 1000 * 60 * 2 });
        }
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
  createNewUserForm: (req, res) => {
    const errors = req.session.errors;
    const oldData = req.session.oldData;
    req.session.oldData = null;
    req.session.oldData = null;
    res.render('profile-create-new', {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
  },
  createNewUser: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render('profile-create-new', {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    const data = req.body;
    const user = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: bcryptjs.hashSync(data.password, 10),
      contact_number: Number(data.contact_number),
      birth_date: data.birth_date,
      address: data.address,
      profile_picture: file ? file.filename : 'default-image.png',
      role_id: data.email.includes('@ebeer.com') ? 1 : 2,
    };

    console.log(user);

    const userInDB = userServices.getUserByEmail(user.email);

    console.log('user', userInDB);

    if (userInDB) {
      return res.render('profile-create-new', {
        errors: {
          email: {
            msg: 'Este correo electrónico ya ha sido registrado',
          },
        },
        oldData: req.body,
      });
    }

    userServices.createUser(user);
    res.redirect('crud');
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
      return res.render('profile-create-new', {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    const data = req.body;
    const user = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: bcryptjs.hashSync(data.password, 10),
      contact_number: Number(data.contact_number),
      birth_date: data.birth_date,
      address: data.address,
      profile_picture: req.file ? req.file.filename : 'default-image.png',
    };

    const userInDB = userServices.getUserByEmail(req.body.email);

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
    res.redirect('crud');
  },
  myProfile: async (req, res) => {
    const id = req.session.userLogged.id;
    const user = await userServices.getUser(id);
    return res.render('profile', { user });
  },
  myProfileEdit: async (req, res) => {
    const id = req.session.userLogged.id;
    const user = await userServices.getUser(id);
    res.render('profile-edit', { user });
  },
  editProfileCrud: async (req, res) => {
    const id = req.params.id;
    const user = await userServices.getUser(id);
    res.render('profile-edit', { user });
  },
  crud: (req, res) => {
    userServices.getAllUsers().then((users) => {
      res.render('users-crud', { users });
    });
  },
  myPasswordEdit: (req, res) => {
    const id = req.session.userLogged.id;
    const user = userServices.getUser(id);
    res.render('profile-edit-password', { user });
  },
  // myProfileEdit: (req, res) => {
  //   const id = req.params.id;
  //   const user = userServices.getUser(id);
  //   res.render('prueba', { user });
  // }, futuro editor admin
  update: (req, res) => {
    const data = req.body;
    const user = {
      email: data.email,
      password: bcryptjs.hashSync(data.password, 10),
      contact_number: Number(data.contactNumber),
      address: data.address,
    };
    const id = req.session.userLogged.id;
    const profile_picture = req.file
      ? req.file.filename
      : userServices.getUser(id).profile_picture;
    user.profile_picture = profile_picture;
    userServices.updateUser(id, user);
    res.redirect('/home');
  },
  updatePassword: (req, res) => {
    const data = req.body;
    const user = {
      password: bcryptjs.hashSync(data.password, 10),
    };
    const id = req.session.userLogged.id;
    const profile_picture = req.file
      ? req.file.filename
      : userServices.getUser(id).profile_picture;
    user.profile_picture = profile_picture;
    userServices.updateUser(id, user);
    res.redirect('/home');
  },
  deleteForm: (req, res) => {
    const id = req.params.id;
    userServices.deleteUser(id).then(() => {
      res.render('users-delete-form', { user });
    });
  },
  destroy: (req, res) => {
    const user = req.body;
    const id = req.params.id;
    const profile_picture = req.file
      ? req.file.filename
      : userServices.getUser(id).profile_picture;
    user.profile_picture = profile_picture;
    userServices.deleteUser(id);
    res.redirect('/users/crud');
  },
  logout: (req, res) => {
    res.clearCookie('email');
    req.session.destroy();
    return res.redirect('/home');
  },
};

module.exports = usersController;
