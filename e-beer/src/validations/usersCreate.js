const { body } = require('express-validator')

module.exports = [
  body('first_name').notEmpty().withMessage('Ingresá tu nombre'),
  body('last_name').notEmpty().withMessage('Ingresá tu apellido'),
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
  body('contact_number')
    .notEmpty()
    .withMessage('Ingresá tu número de teléfono')
    .bail()
    .isInt()
    .withMessage(
      'Ingresá un número de teléfono válido (sin guiones, ni espacios)'
    ),
  body('birth_date').notEmpty().withMessage('Ingresá tu fecha de nacimiento'),
  body('address').notEmpty().withMessage('Ingresá tu dirección'),
]
