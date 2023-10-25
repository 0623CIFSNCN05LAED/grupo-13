const userServices = require("../services/userServices");

module.exports = (req, res, next) => {
  res.locals.isLogged = false;

  const emailInCookie = req.cookies.email;
  const userFromCookie=userServices.getUserByField(
    'email',
    emailInCookie
  );

  if(userFromCookie){
    req.session.userLogged= userFromCookie;
  }

  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
};
