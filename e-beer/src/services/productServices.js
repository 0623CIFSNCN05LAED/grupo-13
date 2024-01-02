const { Products } = require('../database/models');
const { v4: uuidv4 } = require('uuid');
const Sequelize = require('sequelize');

module.exports = {
  getAllProducts: async () => {
    return await Products.findAll();
  },
  getAllProductsAndCount: ({ pageSize, offset }) => {
    return Products.findAndCountAll({
      limit: pageSize,
      offset: offset,
      include: [
        { association: 'p_brand' },
        { association: 'p_category' },
        { association: 'p_size' },
      ],
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
    const product = await Products.findByPk(id);
    return await Products.update(
      {
        id: product.id,
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
  searchProducts: async (query) => {
    const products = await Products.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: '%' + query + '%',
        },
      },
      include: [
        { association: 'p_brand' },
        { association: 'p_category' },
        { association: 'p_size' },
      ],
    });
    return products;
  },
};
