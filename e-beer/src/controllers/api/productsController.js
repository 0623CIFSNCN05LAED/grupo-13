const productServices = require('../../services/productServices')
const fs = require('fs')
const path = require('path')

module.exports = {
  list: async (req, res) => {
    const products = await productServices.getAllProducts()
    const count = products.length
    const response = {
      count,
      products: products.slice(0, 10).map((product) => ({
        id: product.id,
        name: product.name,
        brand: product.p_brand.brand,
        category: product.p_category.name,
        size: product.p_size.name,
        price: product.price,
        detail: `${req.originalUrl}/${product.id}`,
      })),
    }
    res.json(response)
  },
  detail: async (req, res) => {
    const product = await productServices.getProduct(req.params.id)
    const response = {
      ...product,
      image: req.originalUrl + '/image',
    }
    res.json(response)
  },
  image: async (req, res) => {
    const product = await productServices.getProduct(req.params.id)
    const filePath = path.join(
      __dirname,
      '../../../public/images/products',
      product.image
    )

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error(`File ${filePath} does not exist`)
        return
      }

      res.sendFile(filePath)
    })
  },
}
