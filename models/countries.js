'use strict';
module.exports = function(sequelize, DataTypes) {
  var Countries = sequelize.define('Countries', {
    countryName: DataTypes.STRING,
    countryImageURL: DataTypes.STRING
  });
  Countries.associate = function(models) {
    Countries.belongsToMany(models.Users, {through: 'CountryLikes'});
  };
  return Countries;
};
