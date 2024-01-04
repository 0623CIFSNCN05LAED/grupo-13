module.exports = (req, res, next) => {
  if (!req.session.userLogged) {
    res.redirect('/users/login');
  } else if (req.session.userLogged.role_id == 1) {
    next();
  } else if (req.session.userLogged.role_id == 2) {
    res.redirect('/home');
  }
};
