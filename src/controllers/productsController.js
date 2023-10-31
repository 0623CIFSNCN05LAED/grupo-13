const productServices = require('../services/productServices');

const productsController = {
  // Index de las rutas /products
  index: (req, res) => {
    const products = productServices.getAllProducts();
    res.render('products', { products });
  },
  addProduct: (req, res) => {
    req.session.cartFilled = req.body.cartFilled;

    if (req.session.cartFilled == 'agregoUnProducto') {
      req.session.cart = [];
      const product = {
        id: 1,
        name: 'Tres Cordilleras',
        description: 'Crisp and refreshing with hints of citrus',
        image: 'default-image.png',
        category: 'Porter',
        size: '350 cc',
        price: '2237',
      };
      req.session.cart.push(product);

      return res.redirect('/products/cart');
    } else {
      return res.redirect('/products');
    }
  },
  // Product detail
  detail: (req, res) => {
    const id = req.params.id;
    const product = productServices.getProductById(id);

    res.render('product-detail', { product });
  },
  // /create
  addForm: (req, res) => {
    res.render('product-add-form');
  },
  deleteForm: (req, res) => {
    const id = req.params.id;
    const product = productServices.getProduct(id);
    res.render('product-delete-form', { product });
  },
  // Submit add-form
  store: (req, res) => {
    const product = {
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      size: req.body.size,
      price: Number(req.body.price),
      image: req.file ? req.file.filename : productPicture,
    };
    productServices.createProduct(product);
    res.redirect('crud');
  },
  editForm: (req, res) => {
    const id = req.params.id;
    const product = productServices.getProduct(id);
    const image = req.file
      ? req.file.filename
      : productServices.getProduct(id).image;
    product.image = image;
    productServices.updateProduct(id, product);
    res.render('product-edit-form', { product });
  },
  update: (req, res) => {
    const product = req.body;
    const id = req.params.id;
    productServices.updateProduct(id, product);
    res.redirect('/products/crud');
  },
  destroy: (req, res) => {
    const id = req.params.id;
    productServices.deleteProduct(id);
    res.redirect('/products/crud');
  },
  productCrud: (req, res) => {
    const products = productServices.getAllProducts();
    res.render('product-crud', { products });
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
