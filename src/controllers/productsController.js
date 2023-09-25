const productServices = require('../services/productServices');

const productsController = {
  // Index de las rutas /products
  index: (req, res) => {
    const products = productServices.getAllProducts();
    res.render('products', { products });
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
  // Submit add-form
  store: (req, res) => {
    const product = req.body;
    console.log(product);
    res.render('products');
  },

  //   const editId = allProducts[id];
  //   res.render('product-edit-form', { editId: editId }); // trae la vista con el producto solicitado por el usuario mediante el id en la url
  // },
  editForm: (req, res) => {
    const id = req.params.id;
    const product = productServices.getProduct(id); // trae de todos los productos, el producto segun su ubicacion en el array
    res.render('product-edit-form', { product });
  },
  edit: (req, res) => {
    const id = req.params.id; // id que escribe el usuario por url para obtener la vista del formulario de edicion del producto con ese id
    const editedProduct = productServices.getProduct(id);

    // const beer = req.body;
    if (editedProduct) {
      // Si se encontró un producto con el ID dado, lo enviamos en la respuesta.
      console.log(editedProduct);
      res.send(editedProduct);
    } else {
      // Si no se encontró un producto con el ID dado, puedes enviar una respuesta de error.
      res.status(404).send('Producto no encontrado');
    }
    // console.log(editedProduct);
    // res.send(editedProduct);
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
