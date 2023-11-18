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
        as: 'products',
        foreignKey: 'category_id',
      });
    };
  
    return Model;
  };
  