'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cities = sequelize.define('Cities', {
    cityName: DataTypes.STRING,
    cityImageURL: DataTypes.STRING
  });
  Cities.associate = function(models) {
    Cities.belongsToMany(models.Users, {through: 'CityLikes'});
  };
  return Cities;
};
