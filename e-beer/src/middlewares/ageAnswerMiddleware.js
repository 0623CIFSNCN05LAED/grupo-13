const userServices = require('../services/userServices');

module.exports = (req, res, next) => {
  if (req.session && req.session.ageAnswer) {
    res.locals.ageAnswer = true;
    res.locals.ageAnswer = req.session.ageAnswer;
  }
  next();
};
