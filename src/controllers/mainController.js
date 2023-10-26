const productServices = require('../services/productServices');

const mainController = {
  comingAgeForm: (req, res) => {
    return res.render('coming-age');
  },
  comingAge: (req, res) => {
    req.session.ageAnswer = req.body.ageAnswer;

    if (req.session.ageAnswer == 'yes') {
      return res.redirect('home');
    } else {
      return res.redirect('coming-age-no');
    }
  },
  comingAgeNo: (req, res) => {
    return res.render('coming-age');
  },
  index: (req, res) => {
    const products = productServices.getAllProducts();

    res.render('index', { products });
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
