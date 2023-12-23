const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  const resultValidation = validationResult(req);

  if (resultValidation.errors.length > 0) {
    let product = null;
    let newProduct = req.body;

    if (newProduct) {
      product = newProduct;
    }

    return res.render('product-edit-form', {
      errors: resultValidation.mapped(),
      oldData: req.body,
      product,
    });
  }
  next();
};
