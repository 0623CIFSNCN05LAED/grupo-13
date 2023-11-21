module.exports = (req, res, next) => {
  if (req.session.userLogged.role_id == 1) {
    next();
  } else {
    res.redirect('/users/login');
  }
};
