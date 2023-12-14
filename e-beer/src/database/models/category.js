module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      tableName: 'category',
      timestamps: false,
    }
  );

  Model.associate = (models) => {
    Model.hasMany(models.Products, {
      as: 'category_products',
      foreignKey: 'category_id',
    });
  };

  return Model;
};
