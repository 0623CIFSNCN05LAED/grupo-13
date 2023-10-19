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
  body('').notEmpty().withMessage('Ingresá tu apellido'),
];
