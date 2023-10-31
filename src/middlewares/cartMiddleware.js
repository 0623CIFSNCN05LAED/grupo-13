const userServices = require('../services/userServices');

module.exports = (req, res, next) => {
  if (req.session && req.session.cartFilled && req.session.cart) {
    res.locals.cartFilled = true;
    res.locals.cart = true;
    res.locals.cartFilled = req.session.cartFilled;
    res.locals.cart = req.session.cart;
  }

  next();
};
