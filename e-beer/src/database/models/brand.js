module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    'Brand',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      tableName: 'brand',
      timestamps: false,
    }
  );

  Model.associate = (models) => {
    Model.hasMany(models.Products, {
      as: 'brand_products',
      foreignKey: 'brand_id',
    });
  };

  return Model;
};
