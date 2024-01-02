const userServices = require('../services/userServices');
const bcryptjs = require('bcryptjs');

const usersController = {
  // Login
  loginForm: (req, res) => {
    res.render('login');
  },
  login: async (req, res) => {
    const userToLogin = await userServices.getUserByEmail(req.body.email);

    if (userToLogin) {
      const validPassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );

      if (validPassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if (req.body.rememberMe) {
          res.cookie('email', req.body.email, {
            maxAge: 100000000000 * 60 * 2,
          });
        }
        return res.redirect('/users/my-profile');
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
  // Register
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
  register: async (req, res) => {
    await userServices.createUser(req.body, req.file);

    res.redirect('login');
  },
  // Profile
  myProfile: async (req, res) => {
    const id = req.session.userLogged.id;
    const user = await userServices.getUser(id);

    return res.render('my-profile', { user });
  },
  myProfileEditForm: async (req, res) => {
    const id = req.session.userLogged.id;
    const user = await userServices.getUser(id);

    res.render('my-profile-update', { user: user });
  },
  myProfileUpdate: async (req, res) => {
    const id = req.session.userLogged.id;
    await userServices.updateProfile(id, req.body, req.file);
    res.redirect('/users/my-profile');
  },
  // Password edit
  passwordEditForm: async (req, res) => {
    const id = req.session.userLogged.id;
    const user = await userServices.getUser(id);

    const errors = req.session.errors;
    const oldData = req.session.oldData;

    res.render('my-profile-update-password', {
      user: user,
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
  },
  passwordUpdate: async (req, res) => {
    const id = req.session.userLogged.id;
    await userServices.updatePassword(id, req.body);
    res.redirect('/users/my-profile');
  },

  // DASHBOARD
  dashboard: async (req, res) => {
    const users = await userServices.getAllUsers();

    res.render('users-dashboard', { users });
  },
  createUserForm: (req, res) => {
    const errors = req.session.errors;
    const oldData = req.session.oldData;

    req.session.oldData = null;
    req.session.oldData = null;

    res.render('user-create-form', {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
  },
  createUser: async (req, res) => {
    await userServices.createUser(req.body, req.file);

    res.redirect('dashboard');
  },
  updateForm: async (req, res) => {
    const id = req.params.id;
    const user = await userServices.getUser(id);

    const errors = req.session.errors;
    const oldData = req.session.oldData;

    req.session.oldData = null;
    req.session.oldData = null;

    res.render('user-update-form', {
      user: user,
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
  },
  updateUser: async (req, res) => {
    const id = req.params.id;
    // const user = await userServices.getUser(id);
    await userServices.updateUser(id, req.body);

    res.redirect('/users/dashboard');
  },
  deleteForm: async (req, res) => {
    const id = req.params.id;
    const user = await userServices.getUser(id);

    res.render('user-delete-form', { user });
  },
  destroy: (req, res) => {
    const user = req.body;
    const id = req.params.id;
    const profile_picture = req.file
      ? req.file.filename
      : userServices.getUser(id).profile_picture;

    user.profile_picture = profile_picture;
    userServices.deleteUser(id);

    res.redirect('/users/dashboard');
  },
  logout: (req, res) => {
    res.clearCookie('email');
    req.session.destroy();

    return res.redirect('/home');
  },
};

module.exports = usersController;
