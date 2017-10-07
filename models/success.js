'use strict';
module.exports = (sequelize, DataTypes) => {
  var Success = sequelize.define('Success', {
    name: DataTypes.STRING,
    editorEmail: DataTypes.STRING,
    sfdcLink: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Success.belongsTo(models.user);
      }
    }
  });

  // model1.associate = function (models) {
  //   model1.belongsTo(models.model2);
  // };
  return Success;
};
