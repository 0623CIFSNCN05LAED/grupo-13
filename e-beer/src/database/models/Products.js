module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    'Products',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      brand_id: DataTypes.STRING,
      category_id: DataTypes.STRING,
      size_id: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      tableName: 'products',
      timestamps: false,
    }
  );

  Model.associate = (models) => {
    Model.belongsTo(models.Brand, {
      as: 'p_brand',
      foreignKey: 'brand_id',
    });
  };

  Model.associate = (models) => {
    Model.belongsTo(models.Size, {
      as: 'p_size',
      foreignKey: 'size_id',
    });
  };

  Model.associate = (models) => {
    Model.belongsTo(models.Category, {
      as: 'p_category',
      foreignKey: 'category_id',
    });
  };

  return Model;
};
