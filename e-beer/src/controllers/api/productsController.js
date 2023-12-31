const productServices = require('../../services/productServices');
const categoryServices = require('../../services/categoryServices');
const sizeServices = require('../../services/sizeServices');
const brandServices = require('../../services/brandServices');

const fs = require('fs');
const path = require('path');

module.exports = {
  list: async (req, res) => {
    const page = Number(req.query.page) || 1;
    const pageSize = 5;
    const offset = (page - 1) * pageSize;
    const { count, rows: products } = await productServices.getAllProducts({
      pageSize,
      offset,
    });
    const categories = await categoryServices.getAllCategories();
    const sizes = await sizeServices.getAllSizes();
    const brands = await brandServices.getAllBrands();
    const totalPages = Math.ceil(count / pageSize);
    const nextPage =
      page < totalPages
        ? `${req.originalUrl.split('?')[0]}?page=${page + 1}`
        : null;
    const previousPage =
      page > 1 ? `${req.originalUrl.split('?')[0]}?page=${page - 1}` : null;
    const response = {
      meta: {
        status: 200,
        url: `${req.originalUrl}`,
        nextPage,
        previousPage,
      },
      total: {
        count: products.length,
        countByCategory: categories.length,
        countBySize: sizes.length,
        countByBrand: brands.length,
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
          image: `${req.protocol}://${req.get('host')}/api/products/${
            product.id
          }/image`,
          detail: `${req.protocol}://${req.get('host')}/api/products/${
            product.id
          }`,
        })),
        brand: brands.map((brand) => ({
          id: brand.id,
          name: brand.name,
        })),
        categories: categories.map((category) => ({
          id: category.id,
          name: category.name,
        })),
        size: sizes.map((size) => ({
          id: size.id,
          name: size.name,
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
      image: `${req.protocol}://${req.get('host')}/api/products/${
        product.id
      }/image`,
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
