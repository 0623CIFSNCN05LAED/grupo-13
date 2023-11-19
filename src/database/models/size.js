module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    'Size',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      tableName: 'size',
      timestamps: false,
    }
  )

  Model.associate = (models) => {
    Model.hasMany(models.Products, {
      as: 'products',
      foreignKey: 'size_id',
    })
  }

  return Model
}
