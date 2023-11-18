module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    'Products',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      category: DataTypes.STRING,
      size: DataTypes.STRING,
      price: DataTypes.INTEGER,
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
