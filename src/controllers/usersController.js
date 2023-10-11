const userServices = require('../services/userServices')

const usersController = {
  login: (req, res) => {
    return res.render('login')
  },
  registerForm: (req, res) => {
    res.render('register')
  },
  deleteForm: (req, res) => {
    const id = req.params.id
    const user = userServices.getUser(id)
    res.render('users-delete-form', { user })
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
    }
    userServices.createUser(user)
    res.redirect('register')
  },
  myProfile: (req, res) => {
    const id = req.params.id
    const user = userServices.getUser(id)

    return res.render('profile', { user })
  },
  crud: (req, res) => {
    const users = userServices.getAllUsers()
    res.render('users-crud', { users })
  },
  myProfileEdit: (req, res) => {
    const id = req.params.id
    const user = userServices.getUser(id)
    res.render('profile-edit', { user })
  },

  update: (req, res) => {
    const user = req.body
    const id = req.params.id
    userServices.updateUser(id, user)
    res.redirect('/users/:id')
  },

  destroy: (req, res) => {
    const id = req.params.id
    userServices.deleteUser(id)
    res.redirect('/users/crud')
  },
}

module.exports = usersController
