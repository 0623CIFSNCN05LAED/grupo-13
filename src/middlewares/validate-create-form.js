const { validationResult } = require('express-validator')

module.exports = (req, res, next) => {
  const resultValidation = validationResult(req)

  if (resultValidation.errors.length > 0) {
    return res.render('profile-create-new', {
      errors: resultValidation.mapped(),
      oldData: req.body,
    })
  } else {
    next()
  }
}
