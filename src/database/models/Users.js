module.exports = (sequelize, DataTypes) => {
  const alias = 'users';
  const cols = {
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
  };
  const config = {
    tableName: 'users',
    timestamps: false,
  };

  const Users = sequelize.define(alias, cols, config);

  return Users;
};
