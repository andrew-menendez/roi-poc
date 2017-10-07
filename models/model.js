'use strict';
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('Model', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    status: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Model;
};