module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    'Products',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      brand_id: DataTypes.STRING,
      category_id: DataTypes.STRING,
      size_id: DataTypes.STRING,
    },
    {
      tableName: 'products',
      timestamps: false,
    }
  );

  Model.associate = (models) => {
    Model.belongsTo(models.Brand, {
      as: 'brand',
      foreignKey: 'brand_id',
    });
  };

  Model.associate = (models) => {
    Model.belongsTo(models.Size, {
      as: 'size',
      foreignKey: 'size_id',
    });
  };

  Model.associate = (models) => {
    Model.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'category_id',
    });
  };

  return Model;
};
