const usersController = {
  login: (req, res) => {
    return res.render('login');
  },
  register: (req, res) => {
    return res.render('register');
  },
  myProfile: (req, res) => {
    return res.render('myProfile');
  },
  myProfileAdmin: (req, res) => {
    return res.render('myProfileAdmin');
  }
};

module.exports = usersController;