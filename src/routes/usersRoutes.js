/* Require's */
const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');

/* Middlewares */
const upload = require('../middlewares/users-multer');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Login validations
const loginValidations = require('../validations/login');
const loginValidateForm = require('../middlewares/validate-login-form');

// Register validations
const registerValidations = require('../validations/register');
const registerValidateForm = require('../middlewares/validate-register-form');

// Admin create validations
const createValidations = require('../validations/create');
const createValidateForm = require('../middlewares/validate-create-form');

/*Routes */

// Login
usersRouter.get('/login', guestMiddleware, usersController.loginForm);
usersRouter.post(
  '/login',
  loginValidations,
  loginValidateForm,
  usersController.login
);

//Register
usersRouter.get('/register', guestMiddleware, usersController.registerForm);
usersRouter.post(
  '/register',
  upload.single('profile_picture'),
  registerValidations,
  registerValidateForm,
  usersController.register
);

//Create new user
usersRouter.get('/create-user', usersController.createNewUserForm);
usersRouter.post(
  '/create-user',
  createValidations,
  createValidateForm,
  usersController.createNewUser
);

//Users CRUD
usersRouter.get('/crud', authMiddleware, usersController.crud);

//Delete User
usersRouter.get('/:id/delete', authMiddleware, usersController.deleteForm);
usersRouter.delete('/:id/delete', authMiddleware, usersController.destroy);

//Edit profile
usersRouter.get(
  '/myProfile/edit',
  authMiddleware,
  usersController.myProfileEdit
);
// usersRouter.get('/:id/prueba', usersController.myProfileEdit); futuro editor admin
// usersRouter.put('/:id', upload.single('image'), usersController.update); futuro editor admin
usersRouter.put(
  '/myProfile/edit',
  upload.single('image'),
  authMiddleware,
  usersController.update
);

//Edit profile CRUD
usersRouter.get(
  '/:id/edit',
  authMiddleware,
  adminMiddleware,
  usersController.editProfileCrud
);
usersRouter.put(
  '/:id/edit',
  upload.single('image'),
  authMiddleware,
  adminMiddleware,
  usersController.update
);

//Edit password
usersRouter.get(
  '/myPassword/edit',
  authMiddleware,
  usersController.myPasswordEdit
);
// usersRouter.get('/:id/prueba', usersController.myProfileEdit); futuro editor admin
// usersRouter.put('/:id', upload.single('image'), usersController.update); futuro editor admin
usersRouter.put(
  '/myPassword/edit',
  upload.single('image'),
  authMiddleware,
  usersController.updatePassword
);

//MyProfile
usersRouter.get('/myprofile', authMiddleware, usersController.myProfile);

//Edit profile
usersRouter.get('/logout', usersController.logout);

module.exports = usersRouter;
