"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        validate: {
          isDate: true
        }
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        validate: {
          isDate: true
        }
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        validate: {
          isDate: true
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  }
};
