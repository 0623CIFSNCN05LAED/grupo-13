const userServices = require('../services/userServices');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersController = {
  loginForm: (req, res) => {
    const errors = req.session.errors;
    const oldData = req.session.oldData;
    req.session.errors = null;
    req.session.oldData = null;
    res.render('login', {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
  },
  login: (req, res) => {
    const userToLogin= userServices.getUserByField('email', req.body.email);
    

    if(userToLogin){
      return res.send('Ok puedes ingresar');
    }

    return res.render('login',{
      errors:{
        email:{
          msg:'Correo electrónico inválido',
        },
      }
    })


   
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
      password: bcrypt.hashSync(data.password, 10),
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
    const profilePicture = req.file
      ? req.file.filename
      : userServices.getUser(id).profilePicture;
    user.profilePicture = profilePicture;
    userServices.updateUser(id, user);
    res.redirect('/home');
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
