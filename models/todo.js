"use strict";

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "Todo",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM("open", "in-progress", "complete"),
        defaultValue: "open"
      },
      timeCompleted: {
        type: DataTypes.DATE,
        allowNull: true
      },
      timeStarted: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      paranoid: true,
      timestamps: true
    }
  );
  Todo.associate = function (models) {
    // associations can be defined here
    Todo.belongsTo(models.User)
  };
  return Todo;
};
