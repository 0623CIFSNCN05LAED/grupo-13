const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  const resultValidation = validationResult(req);

  if (resultValidation.errors.length > 0) {
    let userEmail = null;
    const userLogged = req.session.userLogged;

    if (userLogged) {
      userEmail = userLogged.email;
    }

    return res.render('user-create-form', {
      errors: resultValidation.mapped(),
      oldData: req.body,
      userEmail,
    });
  }
  next();
};
