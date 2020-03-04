"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Todos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(64)
      },
      status: {
        type: Sequelize.ENUM("open", "in-progress", "completed", "expired", "aborted"),
        defaultValue: "open",
        validate: {
          isIn: [["open", "in-progress", "completed", "expired", "aborted"]]
        }
      },
      description: {
        type: Sequelize.TEXT
      },

      timeCompleted: {
        type: Sequelize.DATE,
        allowNull: true
      },
      timeStarted: {
        type: Sequelize.DATE,
        allowNull: true
      },

      dueDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Todos");
  }
};
