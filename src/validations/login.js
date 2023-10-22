const { body } = require('express-validator');

module.exports = [
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
