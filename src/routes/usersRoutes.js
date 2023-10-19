// Require's
const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');
const upload = require('../middlewares/users-multer');
const { body } = require('express-validator');
const path = require('path');

// Validations
// const loginValidations = require('../validations/login');
// const registerValidations = require('../validations/register');
// const validateForms = require('../middlewares/validate-forms');

const loginValidations = [
  body('email')
    .notEmpty()
    .withMessage('Ingresá un correo electrónico válido')
    .bail()
    .isEmail()
    .withMessage('Ingresá un correo electrónico válido'),
  body('password')
    .notEmpty()
    .withMessage('Ingresá tu contraseña')
    .bail()
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres'),
];

const registerValidations = [
  body('firstName').notEmpty().withMessage('Ingresá tu nombre'),
  body('lastName').notEmpty().withMessage('Ingresá tu apellido'),
  body('email')
    .notEmpty()
    .withMessage('Ingresá tu correo electrónico')
    .bail()
    .isEmail()
    .withMessage('Ingresá un correo electrónico válido'),
  body('password')
    .notEmpty()
    .withMessage('Ingresá tu contraseña')
    .bail()
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres'),
  body('contactNumber')
    .notEmpty()
    .withMessage('Ingresá tu número de teléfono')
    .bail()
    .isInt()
    .withMessage(
      'Ingresá un número de teléfono válido (sin guiones, ni espacios)'
    ),
  body('birthDate').notEmpty().withMessage('Ingresá tu fecha de nacimiento'),
  body('address').notEmpty().withMessage('Ingresá tu dirección'),
  body('profilePicture').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif'];

    if (!file) {
      throw new Error('Subí una foto de perfil');
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ', '
          )}`
        );
      }
    }
  }),
];

// Guard
const userGuard = require('../middlewares/user-guard');

usersRouter.get('/login', usersController.loginForm);
usersRouter.post('/login', loginValidations, usersController.login);

usersRouter.get('/register', usersController.registerForm);
usersRouter.post(
  '/register',
  upload.single('profilePicture'),
  registerValidations,
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
