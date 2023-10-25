module.exports = (req, res, next) => {
  if (req.session.userLogged.accessType == 'admin') {
    next();
  } else {
    res.redirect('/users/login');
  }
};
