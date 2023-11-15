module.exports = (sequelize, dataTypes) => {
  const alias = 'Users';
  const cols = {
    id: {
      type: dataTypes.STRING,
      primaryKey: true,
    },
    firstName: {
      type: dataTypes.STRING,
    },
    lastName: {
      type: dataTypes.STRING,
    },
    email: {
      type: dataTypes.STRING,
    },
    password: {
      type: dataTypes.STRING,
    },
    contacNumber: {
      type: dataTypes.INTENGER,
    },
    birthDate: {
      type: dataTypes.DATE,
    },
    address: {
      type: dataTypes.STRING,
    },
    profilePicture: {
      type: dataTypes.STRING,
    },
    accessType: {
      type: dataTypes.STRING,
    },
  };
  const config = {
    tableName: 'Users',
    timestamps: false,
  };

  const Users = sequelize.define(alias, cols, config);

  return Users;
};
