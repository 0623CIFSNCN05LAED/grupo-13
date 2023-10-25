// Require's
const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');

// Middlewares
const upload = require('../middlewares/users-multer');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Validations
const loginValidations = require('../validations/login');
const loginValidateForm = require('../middlewares/validate-login-form');

const registerValidations = require('../validations/register');
const registerValidateForm = require('../middlewares/validate-register-form');

//Routes
usersRouter.get('/login', guestMiddleware, usersController.loginForm);
usersRouter.post(
  '/login',
  loginValidations,
  loginValidateForm,
  usersController.login
);

usersRouter.get('/register', guestMiddleware, usersController.registerForm);
usersRouter.post(
  '/register',
  upload.single('profilePicture'),
  registerValidations,
  registerValidateForm,
  usersController.register
);

usersRouter.get(
  '/create-new-user',
  adminMiddleware,
  usersController.createNewUserForm
);
usersRouter.post(
  '/create-new-user',
  upload.single('profilePicture'),
  registerValidations,
  registerValidateForm,
  usersController.createNewUser
);

usersRouter.get('/crud', authMiddleware, adminMiddleware, usersController.crud);

usersRouter.get('/:id/delete', authMiddleware, usersController.deleteForm);
usersRouter.delete('/:id/delete', authMiddleware, usersController.destroy);

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

usersRouter.get('/myprofile', authMiddleware, usersController.myProfile);

usersRouter.get('/logout', usersController.logout);

module.exports = usersRouter;
