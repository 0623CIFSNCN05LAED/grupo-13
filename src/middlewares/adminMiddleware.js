module.exports = (req, res, next) => {
  if (req.session.userLogged.role_id == 'admin') {
    next();
  } else {
    res.redirect('/users/login');
  }
};
