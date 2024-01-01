const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');

/* Middlewares */
const upload = require('../middlewares/users/multer-users');
const authMiddleware = require('../middlewares/users/is-logged');
const guestMiddleware = require('../middlewares/users/is-guest');
const adminMiddleware = require('../middlewares/users/is-admin');

// Login validations
const loginValidations = require('../validations/usersLogin');
const loginValidateForm = require('../middlewares/users/login');

// Register validations
const registerValidations = require('../validations/usersRegister');
const registerValidateForm = require('../middlewares/users/register');
const registerValidateEmail = require('../middlewares/users/register-email');

// CRUD validations
const crudValidateForm = require('../middlewares/users/user-create');
const createValidations = require('../validations/usersCreate');
const createValidateForm = require('../middlewares/users/user-create');
const createValidateEmail = require('../middlewares/users/validate-users-create-email');
const updateValidations = require('../validations/validations-users-edit');

// Profile Validations
const editValidateForm = require('../middlewares/users/my-profile-update');
const editValidations = require('../validations/usersEdit');
const editValidateEmail = require('../middlewares/users/my-profile-update-email');
const passValidateForm = require('../middlewares/users/my-profile-password');
const passValidations = require('../validations/usersPasswordEdit');

/* Routes */

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
  registerValidateEmail,
  usersController.register
);

//Logout
usersRouter.get('/logout', usersController.logout);

//My profile
usersRouter.get('/my-profile', authMiddleware, usersController.myProfile);

//Edit profile
usersRouter.get(
  '/my-profile/edit',
  authMiddleware,
  usersController.myProfileEditForm
);
usersRouter.put(
  '/my-profile/edit',
  upload.single('profile_picture'),
  authMiddleware,
  editValidations,
  editValidateForm,
  editValidateEmail,
  usersController.myProfileUpdate
);

//Edit password
usersRouter.get(
  '/my-password/edit',
  authMiddleware,
  usersController.passwordEditForm
);
usersRouter.put(
  '/my-password/edit',
  authMiddleware,
  passValidations,
  passValidateForm,
  usersController.passwordUpdate
);

//Users DASHBOARD
usersRouter.get(
  '/dashboard',
  authMiddleware,
  adminMiddleware,
  usersController.dashboard
);

//Create user - admin
usersRouter.get(
  '/create-user',
  adminMiddleware,
  usersController.createUserForm
);
usersRouter.post(
  '/create-user',
  createValidations,
  createValidateForm,
  createValidateEmail,
  usersController.createUser
);

//Delete user - admin
usersRouter.get(
  '/:id/delete',
  authMiddleware,
  adminMiddleware,
  usersController.deleteForm
);
usersRouter.delete('/:id/delete', authMiddleware, usersController.destroy);

//Update user - admin
usersRouter.get(
  '/:id/edit',
  authMiddleware,
  adminMiddleware,
  usersController.updateForm
);
usersRouter.put(
  '/:id/edit',
  authMiddleware,
  updateValidations,
  adminMiddleware,
  crudValidateForm,
  usersController.update
);

module.exports = usersRouter;
