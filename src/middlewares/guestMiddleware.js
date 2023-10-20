function guestMiddleware(req, res, next) {
  if (req.session.userLogged) {
    return res.redirect('/users/myprofile');
  }
  next();
}

module.exports = guestMiddleware;
