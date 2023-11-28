module.exports = (req, res, next) => {
  if (!req.session.ageAnswer || req.session.ageAnswer != 'yes') {
    return res.redirect('/');
  }
  next();
};
//ambas condiciones deben estar juntas por que es o no existe o no es igual a yes o pero no importa que sea antes de estas dos cosas, lo mas importante es que exista algo en cookies. Si o no existe en la session o no es igual a yes, Y (&&) que no exista req.cookies.email. Si ya llego a loguear, ya confirmó su edad en el pasado.
