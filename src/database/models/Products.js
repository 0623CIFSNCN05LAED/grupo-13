module.exports = (sequelize, dataTypes) => {
  const alias = 'Products'
  const cols = {
    id: {
      type: dataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: dataTypes.STRING,
    },
    description: {
      type: dataTypes.STRING,
    },
    image: {
      type: dataTypes.STRING,
    },
    category: {
      type: dataTypes.STRING,
    },
    size: {
      type: dataTypes.STRING,
    },
    price: {
      type: dataTypes.INTEGER,
    },
  }
  const config = {
    tableName: 'Products',
    timestamps: false,
  }

  const Products = sequelize.define(alias, cols, config)

  return Products
}
