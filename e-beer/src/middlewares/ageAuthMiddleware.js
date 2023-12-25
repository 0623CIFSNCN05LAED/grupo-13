module.exports = (req, res, next) => {
  if (!req.session.ageAnswer || req.session.ageAnswer != 'yes') {
    return res.redirect('/');
  }
  next();
};
