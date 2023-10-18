const userServices = require('../services/userServices');
const bcrypt = require('bcryptjs');

const usersController = {
  loginForm: (req, res) => {
    const errors = req.session.errors;
    const oldData = req.session.oldData;
    req.session.oldData = null;
    req.session.errors = null;
    res.render('login', {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
  },
  login: (req, res) => {
    const data = req.body;
    req.session.userData = data;
    res.redirect('/home');
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
    const data = req.body;
    console.log(data);
    req.session.userData = data;
    const user = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: bcrypt.hashSync(data.password, 10),
      accessType: data.accessType,
      contactNumber: Number(data.contactNumber),
      birthDate: data.birthDate,
      address: data.address,
      image: req.file ? req.file.filename : profilePicture,
    };
    //userServices.getUserByField('email', req.body.email);
    userServices.createUser(user);
    res.redirect('login');
  },
  deleteForm: (req, res) => {
    const id = req.params.id;
    const user = userServices.getUser(id);
    res.render('users-delete-form', { user });
  },
  myProfile: (req, res) => {
    const id = req.params.id;
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
    const image = req.file ? req.file.filename : userServices.getUser(id).image;
    user.image = image;
    userServices.updateUser(id, user);
    res.redirect('/home');
  },
  destroy: (req, res) => {
    const user = req.body;
    const id = req.params.id;
    const image = req.file ? req.file.filename : userServices.getUser(id).image;
    user.image = image;
    userServices.deleteUser(id);
    res.redirect('/users/crud');
  },
};

module.exports = usersController;
