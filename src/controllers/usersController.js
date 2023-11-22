const userServices = require('../services/userServices')
const bcryptjs = require('bcryptjs')

const usersController = {
  // Login
  loginForm: (req, res) => {
    res.render('login')
  },
  login: async (req, res) => {
    const userToLogin = await userServices.getUserByEmail(req.body.email)

    if (userToLogin) {
      const validPassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      )

      if (validPassword) {
        delete userToLogin.password
        req.session.userLogged = userToLogin

        if (req.body.rememberMe) {
          res.cookie('email', req.body.email, { maxAge: 1000 * 60 * 2 })
        }
        return res.redirect('/users/myprofile')
      }

      return res.render('login', {
        errors: {
          password: {
            msg: 'El usuario y/o contraseña ingresados son inválidos',
          },
        },
      })
    }

    return res.render('login', {
      errors: {
        email: {
          msg: 'El correo electrónico ingresado es inválido',
        },
      },
    })
  },
  // Crear Usuario
  createNewUserForm: (req, res) => {
    const errors = req.session.errors
    const oldData = req.session.oldData

    req.session.oldData = null
    req.session.oldData = null

    res.render('profile-create-new', {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    })
  },
  createNewUser: async (req, res) => {
    await userServices.createUser(req.body, req.file)

    res.redirect('crud')
  },
  // Registrar Usuario
  registerForm: (req, res) => {
    const errors = req.session.errors
    const oldData = req.session.oldData

    req.session.oldData = null
    req.session.oldData = null

    res.render('register', {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    })
  },
  register: async (req, res) => {
    await userServices.createUser(req.body, req.file)

    res.redirect('login')
  },
  // Perfil
  myProfile: async (req, res) => {
    const id = req.session.userLogged.id
    const user = await userServices.getUser(id)

    return res.render('profile', { user })
  },
  myProfileEdit: async (req, res) => {
    const id = req.session.userLogged.id
    const user = await userServices.getUser(id)

    res.render('profile-edit', { user })
  },
  myPasswordEdit: async (req, res) => {
    const id = req.session.userLogged.id
    const user = await userServices.getUser(id)

    res.render('profile-edit-password', { user })
  },
  updatePassword: (req, res) => {
    const data = req.body
    const user = {
      password: bcryptjs.hashSync(data.password, 10),
    }
    const id = req.session.userLogged.id
    const profile_picture = req.file
      ? req.file.filename
      : userServices.getUser(id).profile_picture

    user.profile_picture = profile_picture
    userServices.updateUser(id, user)

    res.redirect('/home')
  },
  // Crud
  crud: async (req, res) => {
    const users = await userServices.getAllUsers()

    res.render('users-crud', { users })
  },
  editProfileCrud: async (req, res) => {
    const id = req.params.id
    const user = await userServices.getUser(id)

    res.render('profile-edit', { user }) // TODO: Crear vista propia
  },
  update: async (req, res) => {
    const id = req.params.id
    await userServices.updateUser(id, req.body, req.file)

    res.redirect('/home')
  },
  // Eliminar Usuario
  deleteForm: async (req, res) => {
    const id = req.params.id
    const user = await userServices.getUser(id)

    res.render('users-delete-form', { user })
  },
  destroy: (req, res) => {
    const user = req.body
    const id = req.params.id
    const profile_picture = req.file
      ? req.file.filename
      : userServices.getUser(id).profile_picture

    user.profile_picture = profile_picture
    userServices.deleteUser(id)

    res.redirect('/users/crud')
  },
  // Cerrar Sesión
  logout: (req, res) => {
    res.clearCookie('email')
    req.session.destroy()

    return res.redirect('/home')
  },
}

module.exports = usersController
