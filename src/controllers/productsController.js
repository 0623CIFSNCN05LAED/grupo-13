const productServices = require('../services/productServices')
const { v4: uuidv4 } = require('uuid')

const productsController = {
  index: (req, res) => {
    productServices.getAllProducts().then((products) => {
      res.render('products', { products })
    })
  },
  detail: (req, res) => {
    const id = req.params.id
    productServices.getProduct(id).then((product) => {
      res.render('product-detail', { product })
    })
  },
  // create
  addForm: (req, res) => {
    res.render('product-add-form')
  },
  store: (req, res) => {
    const product = {
      id: uuidv4(),
      name: req.body.name,
      price: Number(req.body.price),
      description: req.body.description,
      brand_id: req.body.brand_id,
      category_id: req.body.category_id,
      size_id: req.body.size_id,
      image: req.file ? req.file.filename : productPicture,
    }
    productServices.createProduct(product).then(() => {
      res.redirect('crud')
    })
  },
  editForm: (req, res) => {
    const id = req.params.id
    const product = productServices.getProduct(id)
    const image = req.file
      ? req.file.filename
      : productServices.getProduct(id).image
    product.image = image
    productServices.updateProduct(id, product)
    res.render('product-edit-form', { product })
  },
  update: (req, res) => {
    const product = req.body
    const id = req.params.id
    productServices.updateProduct(id, product)
    res.redirect('/products/crud')
  },
  deleteForm: (req, res) => {
    const id = req.params.id
    const product = productServices.getProduct(id)
    res.render('product-delete-form', { product })
  },
  destroy: (req, res) => {
    const id = req.params.id
    productServices.deleteProduct(id)
    res.redirect('/products/crud')
  },
  productCrud: (req, res) => {
    const products = productServices.getAllProducts()
    res.render('product-crud', { products })
  },
  productCart: (req, res) => {
    res.render('product-cart')
  },
  productCartFilled: (req, res) => {
    res.render('product-cart-filled')
  },
  productForm: (req, res) => {
    res.render('product-form')
  },
}

module.exports = productsController
