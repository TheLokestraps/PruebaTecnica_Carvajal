/* eslint-disable no-param-reassign */
const {
  Model,
} = require('sequelize');

const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../../config');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Contact, { foreignKey: 'userId', as: 'user' });
    }

    comparePassword(plainTextPassword) {
      return bcrypt.compare(plainTextPassword, this.password);
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  const encryptPassword = async (user) => {
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
    }
  };

  User.beforeCreate(encryptPassword);
  User.beforeUpdate(encryptPassword);

  return User;
};
