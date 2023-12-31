const productServices = require('../../services/productServices');
const categoryServices = require('../../services/categoryServices');

const fs = require('fs');
const path = require('path');

module.exports = {
  list: async (req, res) => {
    const page = Number(req.query.page) || 1;
    const pageSize = 5;
    const offset = (page - 1) * pageSize;
    const products = await productServices.getAllProducts({ pageSize, offset });
    const categories = await categoryServices.getAllCategories();
    const response = {
      meta: {
        satus: 200,
        url: `${req.originalUrl}`,
        nextPage: `${req.originalUrl.split('?')[0]}?page=${page + 1}`,
      },
      total: {
        count: products.length,
        countByCategory: categories.length,
      },
      data: {
        products: products.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          brand_id: product.brand_id,
          category_id: product.category_id,
          size_id: product.size_id,
          image: product.image,
          detail: `${req.originalUrl}/${product.id}`,
        })),
      },
    };
    res.json(response);
  },

  detail: async (req, res) => {
    const product = await productServices.getProduct(req.params.id);
    const response = {
      ...product,
      categories: product.categories,
      image: req.originalUrl + '/image',
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
