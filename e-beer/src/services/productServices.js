const { Products } = require('../database/models');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  getAllProducts: () => {
    return Products.findAll({
      include: [{ association: 'p_category' }, { association: 'p_size' }],
    });
  },
  getProduct: async (id) => {
    return await Products.findByPk(id);
  },
  getProductDetail: (id) => {
    return Products.findByPk(id).then((product) => {
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
  updateProduct: async (id, body, file) => {
    console.log('Updating product');

    const product = await Products.findByPk(id);
    return await Products.update(
      {
        id: id,
        name: body.name,
        price: Number(body.price),
        description: body.description,
        brand_id: body.brand_id,
        category_id: body.category_id,
        size_id: body.size_id,
        image: file ? file.filename : product.image,
      },
      {
        where: { id: id },
      }
    );
  },
  deleteProduct: (id) => {
    return Products.destroy({
      where: { id: id },
    });
  },
};
