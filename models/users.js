'use strict';

var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  Users.associate = function(models) {
    Users.belongsToMany(models.Countries, {through: 'CountryLikes'});
    Users.belongsToMany(models.States, {through: 'StateLikes'});
    Users.belongsToMany(models.Cities, {through: 'CityLikes'});
  };

  Users.prototype.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  Users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  Users.beforeCreate(function(user) {
    user.password = user.generateHash(user.password);
  });

  return Users;
};
