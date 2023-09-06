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
  productAddForm: (req, res) => {
    return res.render('product-add-form');
  }
};

module.exports = productsController;