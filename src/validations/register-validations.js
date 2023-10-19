const { body } = require('express-validator');

module.exports = [
  body('firstName').notEmpty().withMessage('Ingresá tu nombre'),
  body('lastName').notEmpty().withMessage('Ingresá tu apellido'),
  body('email')
    .notEmpty()
    .withMessage('Ingresá tu correo electrónico')
    .bail()
    .isEmail()
    .withMessage('Ingresá un correo electrónico válido'),
  body('password').notEmpty().withMessage('Ingresá tu contraseña'),
  body('contactNumber')
    .notEmpty()
    .withMessage('Ingresá tu número de teléfono')
    .bail(),
  body('birthDate')
    .notEmpty()
    .withMessage('Ingresá tu fecha de nacimiento')
    .bail(),
  body('address').notEmpty().withMessage('Ingresá tu dirección').bail(),
  body('profilePicture')
    .notEmpty()
    .withMessage('Ingresá tu imagen de perfil')
    .bail(),
];
