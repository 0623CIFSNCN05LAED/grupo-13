module.exports = (req, res, next) => {
  if (
    (req.cookies && req.cookies.email != undefined) ||
    (req.session.userLogged && req.session.userLogged.email != undefined)
  ) {
    req.session.ageAnswer = 'yes';
    res.locals.ageAnswer = true;
    res.locals.ageAnswer = req.session.ageAnswer;
    return res.redirect('home');
  }
  next();
};
