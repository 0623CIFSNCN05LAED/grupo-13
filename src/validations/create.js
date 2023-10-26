const { body } = require('express-validator');

module.exports = [
  body('firstName').notEmpty().withMessage('Ingresar nombre'),
  body('lastName').notEmpty().withMessage('Ingresar apellido'),
  body('email')
    .notEmpty()
    .withMessage('Ingresar correo electrónico')
    .bail()
    .isEmail()
    .withMessage('Ingresar un correo electrónico válido'),
  body('password')
    .notEmpty()
    .withMessage('Ingresar contraseña provisoria')
    .bail()
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres'),
  body('contactNumber')
    .notEmpty()
    .withMessage('Ingresar número de teléfono')
    .bail()
    .isInt()
    .withMessage('Ingresar un teléfono válido (sin caracteres, ni espacios)'),
  body('birthDate').notEmpty().withMessage('Ingresar fecha de nacimiento'),
  body('address').notEmpty().withMessage('Ingresar dirección'),
];
