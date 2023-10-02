const userServices = require('../services/userServices');

const usersController = {
  login: (req, res) => {
    return res.render('login');
  },
  registerForm: (req, res) => {
    res.render('register');
  },
  register: (req, res) => {
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      accessType: req.body.accessType,
      contactNumber: Number(req.body.contactNumber),
      birthDate: req.body.birthDate,
      address: req.body.address,
      image: req.file ? req.file.filename : userPicture,
    };
    userServices.createUser(user);
    res.redirect('register');
  },
  myProfile: (req, res) => {
    return res.render('myProfile');
  },
  myProfileAdmin: (req, res) => {
    return res.render('myProfileAdmin');
  },
};

module.exports = usersController;
