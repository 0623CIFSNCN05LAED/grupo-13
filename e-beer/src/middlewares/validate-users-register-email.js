const userServices = require('../services/userServices');

module.exports = async (req, res, next) => {
  const userInDB = await userServices.getUserByEmail(req.body.email);

  if (userInDB) {
    return res.render('register', {
      errors: {
        email: {
          msg: 'Este correo electrónico ya ha sido registrado',
        },
      },
      oldData: req.body,
    });
  } else {
    next();
  }
};
