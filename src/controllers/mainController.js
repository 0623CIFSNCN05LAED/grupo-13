const mainController = {
  comingAge: (req, res) => {
    return res.render('coming-age');
  },
  comingAgeNo: (req, res) => {
    return res.render('coming-age-no');
  },
  index: (req, res) => {
    return res.render('index');
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
