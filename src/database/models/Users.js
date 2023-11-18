module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    'Users',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      contactNumber: {
        type: DataTypes.INTEGER,
      },
      birthDate: {
        type: DataTypes.DATE,
      },
      address: {
        type: DataTypes.STRING,
      },
      profilePicture: {
        type: DataTypes.STRING,
      },
      accessType: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'users',
      timestamps: false,
    }
  );

  return Model;
};
