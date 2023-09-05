const productsController = {
  productCart: (req, res) => {
    return res.render('product-cart');
  },
  productCartFilled: (req, res) => {
    return res.render('product-cart-filled');
  },
  productDetail: (req, res) => {
    return res.render('product-detail');
  },
  productList: (req, res) => {
    return res.render('product-list');
  },
  addEditForm: (req, res) => {
    return res.render('add-edit-form');
  },
};

module.exports = productsController;
