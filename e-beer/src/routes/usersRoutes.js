const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');

/* Middlewares */
const upload = require('../middlewares/multer-users');
const isLoggedMiddleware = require('../middlewares/is-logged');
const isGuestMiddleware = require('../middlewares/is-guest');
const isAdminMiddleware = require('../middlewares/is-admin');

// Login validations
const loginValidations = require('../validations/login');
const loginValidateForm = require('../middlewares/login');

// Register validations
const registerValidations = require('../validations/register');
const registerValidateForm = require('../middlewares/register');
const registerValidateEmail = require('../middlewares/register-email');

// Dashboard validations
const userCreateValidations = require('../validations/usersCreate');
const userCreateValidateForm = require('../middlewares/user-create');
const userCreateValidateEmail = require('../middlewares/user-create-email');

// Profile Validations
const myProfileUpdateValidateForm = require('../middlewares/my-profile-update');
const myProfileUpdateValidations = require('../validations/myProfileUpdate');
const profileValidateEmail = require('../middlewares/my-profile-update-email');

const passValidateForm = require('../middlewares/my-profile-password');
const passValidations = require('../validations/myProfilePassword');

/* Routes */

// Login
usersRouter.get('/login', isGuestMiddleware, usersController.loginForm);
usersRouter.post(
  '/login',
  loginValidations,
  loginValidateForm,
  usersController.login
);

//Register
usersRouter.get('/register', isGuestMiddleware, usersController.registerForm);
usersRouter.post(
  '/register',
  upload.single('profile_picture'),
  registerValidations,
  registerValidateForm,
  registerValidateEmail,
  usersController.register
);

//My profile
usersRouter.get('/my-profile', isLoggedMiddleware, usersController.myProfile);

//My profile - edit
usersRouter.get(
  '/my-profile/edit',
  isLoggedMiddleware,
  usersController.myProfileEditForm
);
usersRouter.put(
  '/my-profile/edit',
  upload.single('profile_picture'),
  myProfileUpdateValidations,
  myProfileUpdateValidateForm,
  profileValidateEmail,
  usersController.myProfileUpdate
);

//My profile - password
usersRouter.get(
  '/my-password/edit',
  isLoggedMiddleware,
  usersController.passwordEditForm
);
usersRouter.put(
  '/my-password/edit',
  isLoggedMiddleware,
  passValidations,
  passValidateForm,
  usersController.passwordUpdate
);

//Users DASHBOARD
usersRouter.get(
  '/dashboard',
  isLoggedMiddleware,
  isAdminMiddleware,
  usersController.dashboard
);

//Create user
usersRouter.get(
  '/create-user',
  isLoggedMiddleware,
  isAdminMiddleware,
  usersController.createUserForm
);
usersRouter.post(
  '/create-user',
  userCreateValidations,
  userCreateValidateForm,
  userCreateValidateEmail,
  usersController.createUser
);

//Update user
usersRouter.get(
  '/:id/edit',
  isLoggedMiddleware,
  isAdminMiddleware,
  usersController.updateForm
);
usersRouter.put('/:id/edit', usersController.updateUser);

//Delete user
usersRouter.get(
  '/:id/delete',
  isLoggedMiddleware,
  isAdminMiddleware,
  usersController.deleteForm
);
usersRouter.delete('/:id/delete', isLoggedMiddleware, usersController.destroy);

//Logout
usersRouter.get('/logout', usersController.logout);

module.exports = usersRouter;
