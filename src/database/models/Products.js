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
  return Model;
};
