module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    'Role',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      tableName: 'role',
      timestamps: false,
    }
  );

  Model.associate = (models) => {
    Model.hasMany(models.User, {
      as: 'users',
      foreignKey: 'role_id',
    });
  };

  return Model;
};
