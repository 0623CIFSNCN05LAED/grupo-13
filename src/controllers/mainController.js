const mainController = {
  comingAge: (req, res) => {
    return res.render('coming-age');
  },
  comingAgeNo: (req, res) => {
    return res.render('coming-age-no');
  },
  index: (req, res) => {
    const data = req.session.userData;
    res.render('index', {
      email: data.email,
      password: data.password,
    });
  },
  contact: (req, res) => {
    return res.render('contact');
  },
  aboutUs: (req, res) => {
    return res.render('about-us');
  },
  tyc: (req, res) => {
    return res.render('tyc');
  },
};

module.exports = mainController;
