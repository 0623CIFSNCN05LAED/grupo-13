const { Products } = require('../database/models')

const productServices = {
  getAllProducts: () => {
    return Products.findAll()
  },
  getProduct: (id) => {
    return Products.findByPk(id)
  },
  // TODO:: Preguntar a Aylen
  // getProductsByCategoryId: () => {
  //   return Products.findOne({ where: { category_id: 'Porter' } })
  // },
  createProduct: (product) => {
    return Products.create(product)
  },
  updateProduct: (id, product) => {
    return Products.update(id, product)
  },
  deleteProduct: (id) => {
    return Products.destroy(id)
  },
}

module.exports = productServices
