const productsController = {
  // Product list
  products: (req, res) => {
    res.render('products');
  },
  // Product detail
  productDetail: (req, res) => {
    res.render('product-detail');
  },
  // addForm - product add form view
  addForm: (req, res) => {
    res.render('product-add-form');
  },
  create: (req, res) => {
    const product = req.params;
    console.log(product);
    res.redirect('/products');
  },
  productEditForm: (req, res) => {
    res.render('product-edit-form');
  },
  productEditPut: (req, res) => {
    let productEdit = req.params.productEdit;
    res.send(productEdit);
  },
  productEditDelete: (req, res) => {
    let productDelete = req.params.productDelete;
    res.send(productDelete);
  },
  productCrud: (req, res) => {
    res.render('product-crud');
  },
  productCart: (req, res) => {
    res.render('product-cart');
  },
  productCartFilled: (req, res) => {
    res.render('product-cart-filled');
  },
  productForm: (req, res) => {
    res.render('product-form');
  },
};

module.exports = productsController;
