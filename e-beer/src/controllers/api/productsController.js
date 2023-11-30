const productServices = require('../../services/productServices');
const fs = require('fs');
const path = require('path');

module.exports = {
  list: async (req, res) => {
    const products = await productServices.getAllProducts();
    const count = products.length;
    const countByCategory = {};
    const response = {
      count,
      countByCategory,
      products: products.map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        categories: product.categories,
        detail: `${req.originalUrl}/${product.id}`,
      })),
    };
    res.json(response);
  },

  detail: async (req, res) => {
    const product = await productServices.getProduct(req.params.id);
    const response = {
      ...product,
      categories: product.categories,
      image: req.originalUrl + '/' + product.id + '/image',
    };
    res.json(response);
  },
  image: async (req, res) => {
    const product = await productServices.getProduct(req.params.id);
    const filePath = path.join(
      __dirname,
      '../../../public/images/products',
      product.image
    );

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error(`File ${filePath} does not exist`);
        return;
      }

      res.sendFile(filePath);
    });
  },
};
