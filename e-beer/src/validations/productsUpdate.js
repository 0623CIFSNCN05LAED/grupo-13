const { body } = require('express-validator');
const path = require('path');

module.exports = [
  body('name')
    .notEmpty()
    .withMessage('Ingresá el nombre del producto')
    .bail()
    .isLength({ min: 5 })
    .withMessage('Ingresá al menos 5 caractetes'),
  body('price').notEmpty().withMessage('Ingresá el precio'),
  body('description')
    .notEmpty()
    .withMessage('Ingresá la descripción')
    .bail()
    .isLength({ min: 20 })
    .withMessage('La descripción debe tener al menos 20 caracteres'),
  body('brand_id').notEmpty().withMessage('Ingresá el ID de la marca'),
  body('category_id').notEmpty().withMessage('Ingresá el ID de la categoría'),
  body('size_id').notEmpty().withMessage('Ingresá el ID de la medida'),
  body('image').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

    if (file) {
      let fileExtension = path.extname(file.originalname);
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
];
