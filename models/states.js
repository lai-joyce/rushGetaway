'use strict';
module.exports = function(sequelize, DataTypes) {
  var States = sequelize.define('States', {
    stateName: DataTypes.STRING,
    stateImageURL: DataTypes.STRING
  });
  States.associate = function(models) {
    States.belongsToMany(models.Users, {through: 'StateLikes'});
  };
  return States;
};
