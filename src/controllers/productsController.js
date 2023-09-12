const productsController = {
  products: (req, res) => {
    return res.render('products');
  },
  productDetail: (req, res) => {
    return res.render('product-detail');
  },
  productAddForm: (req, res) => {
    return res.render('product-add-form');
  },
  productEditForm: (req, res) => {
    return res.render('product-edit-form');
  },
  productEditPut: (req, res) => {
    let productEdit = req.params.productEdit;
    return res.send(productEdit);
  },
  productEditDelete: (req, res) => {
    let productEditDelete = req.params.productEditDelete;
    return res.send(productEditDelete);
  },
  productCrud: (req, res) => {
    return res.render('product-crud');
  },
  productCart: (req, res) => {
    return res.render('product-cart');
  },
  productCartFilled: (req, res) => {
    return res.render('product-cart-filled');
  },
  productForm: (req, res) => {
    return res.render('product-form');
  },
};

module.exports = productsController;
