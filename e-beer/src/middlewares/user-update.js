const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  const resultValidation = validationResult(req);

  if (resultValidation.errors.length > 0) {
    return res.render('user-update-form', {
      errors: resultValidation.mapped(),
    });
  }
  next();
};
