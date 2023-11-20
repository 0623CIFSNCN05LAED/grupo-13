const { Products } = require('../database/models');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  getAllProducts: () => {
    return Products.findAll();
  },
  getProduct: (id) => {
    return Products.findByPk(id);
  },
  getProductDetail: (id) => {
    return Products.findByPk(id).then((product) => {
      console.log(
        'trayendo producto,' + product.name,
        'imagen: ' + product.image
      );
      return {
        id: product.id,
        name: product.name,
        price: Number(product.price),
        description: product.description,
        brand_id: product.brand_id,
        category_id: product.category_id,
        size_id: product.size_id,
        image: product.image ? product.image : 'default-image.png',
      };
    });
  },

  // TODO:: Preguntar a Aylen
  // getProductsByCategoryId: () => {
  //   return Products.findOne({ where: { category_id: 'Porter' } })
  // },
  createProduct: (body, file) => {
    console.log('Creando producto');
    return Products.create({
      id: uuidv4(),
      name: body.name,
      price: Number(body.price),
      description: body.description,
      brand_id: body.brand_id,
      category_id: body.category_id,
      size_id: body.size_id,
      image: file ? file.filename : 'default-image.png',
    });
  },
  updateProduct: (id, body, file) => {
    console.log('Updating product');
    return Products.update(
      {
        id: id,
        name: body.name,
        price: Number(body.price),
        description: body.description,
        brand_id: body.brand_id,
        category_id: body.category_id,
        size_id: body.size_id,
        image: file ? file.filename : body.image,
      },
      {
        where: { id: id },
      }
    );
  },
  deleteProduct: (id) => {
    return Products.destroy(id);
  },
};
