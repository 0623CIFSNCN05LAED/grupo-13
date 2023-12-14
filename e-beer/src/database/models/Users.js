module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    'Users',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      contact_number: {
        type: DataTypes.INTEGER,
      },
      birth_date: {
        type: DataTypes.DATE,
      },
      address: {
        type: DataTypes.STRING,
      },
      profile_picture: {
        type: DataTypes.STRING,
      },
      role_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'users',
      timestamps: false,
    }
  );

  return Model;
};
