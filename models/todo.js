"use strict";

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "Todo",
    {
      title: {
        type: DataTypes.STRING(64),
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM(
          "open",
          "in-progress",
          "completed",
          "expired",
          "aborted"
        ),
        defaultValue: "open",
        validate: {
          isIn: [["open", "in-progress", "completed", "expired", "aborted"]]
        }
      },

      dueDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      timeCompleted: {
        type: DataTypes.DATE,
        allowNull: true
      },
      timeStarted: {
        type: DataTypes.NOW,
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT("tiny"),
        allowNull: true
      }
    },
    {
      paranoid: true,
      timestamps: true
    }
  );
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User);
  };
  return Todo;
};
