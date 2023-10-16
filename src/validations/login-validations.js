const { body } = require('express-validator');

module.exports = [
  body('email')
    .notEmpty()
    .withMessage('Ingresá tu correo electrónico')
    .bail()
    .isEmail()
    .withMessage('Ingresá un correo electrónico válido'),
  body('password').notEmpty().withMessage('Ingresá tu contraseña'),
];
