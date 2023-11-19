const { Products } = require('../database/models');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  getAllProducts: () => {
    return Products.findAll();
  },
  getProduct: (id) => {
    return Products.findByPk(id);
  },
  // TODO:: Preguntar a Aylen
  // getProductsByCategoryId: () => {
  //   return Products.findOne({ where: { category_id: 'Porter' } })
  // },
  createProduct: (body, file) => {
    console.log('Creando producto');
    console.log(file);
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
    return Products.update(
      {
        id: uuidv4(),
        name: body.name,
        price: Number(body.price),
        description: body.description,
        brand_id: body.brand_id,
        category_id: body.category_id,
        size_id: body.size_id,
        image: file ? file.filename : 'default-image.png',
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
