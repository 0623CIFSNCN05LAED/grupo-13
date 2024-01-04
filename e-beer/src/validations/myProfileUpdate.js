const { body } = require('express-validator');
const path = require('path');

module.exports = [
  body('email')
    .notEmpty()
    .withMessage('Ingresá tu correo electrónico')
    .bail()
    .isEmail()
    .withMessage('Ingresá un correo electrónico válido'),
  body('profile_picture').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.JPG', '.JPEG', '.PNG', '.GIF'];

    if (file) {
      let fileExtension = path.extname(file.originalname).toUpperCase();
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ', '
          )}`
        );
      }
    }
    return true;
  }),
  body('contact_number')
    .notEmpty()
    .withMessage('Ingresá tu número de teléfono')
    .bail()
    .isInt()
    .withMessage(
      'Ingresá un número de teléfono válido (sin guiones, ni espacios)'
    ),
  body('address').notEmpty().withMessage('Ingresá tu dirección'),
];
