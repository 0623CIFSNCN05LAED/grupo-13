// Require's
const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');
const upload = require('../middlewares/users-multer');

// Login validations
const loginValidations = require('../validations/login');
const loginValidateForm = require('../middlewares/validate-login-form');

// Register validations
const registerValidations = require('../validations/register');
const registerValidateForm = require('../middlewares/validate-register-form');

// Guard
const userGuard = require('../middlewares/user-guard');

usersRouter.get('/login', usersController.loginForm);
usersRouter.post(
  '/login',
  loginValidations,
  loginValidateForm,
  usersController.login
);

usersRouter.get('/register', usersController.registerForm);
usersRouter.post(
  '/register',
  registerValidations,
  registerValidateForm,
  upload.single('profilePicture'),
  usersController.register
);

usersRouter.get('/crud', userGuard, usersController.crud);

usersRouter.get('/:id/delete', userGuard, usersController.deleteForm);
usersRouter.delete('/:id/delete', userGuard, usersController.destroy);

usersRouter.get('/:id/edit', userGuard, usersController.myProfileEdit);
// usersRouter.get('/:id/prueba', usersController.myProfileEdit); futuro editor admin
// usersRouter.put('/:id', upload.single('image'), usersController.update); futuro editor admin
usersRouter.put(
  '/:id',
  upload.single('image'),
  userGuard,
  usersController.update
);

usersRouter.get('/:id', userGuard, usersController.myProfile);

module.exports = usersRouter;
