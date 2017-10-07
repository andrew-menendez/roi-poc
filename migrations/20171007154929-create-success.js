'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('successes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      editorEmail: {
        type: Sequelize.STRING
      },
      sfdcLink: {
        type: Sequelize.STRING
      },
      userId:{
              type: Sequelize.INTEGER,
              references: {
                model: 'users',
                key: 'id'
              }
            },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('successes');
  }
};
