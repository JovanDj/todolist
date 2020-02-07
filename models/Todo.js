"use strict";

const Sequelize = require("sequelize");
const db = require("../sequelize");

const Todo = db.define(
  "todo",
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM("open", "in-progress", "complete"),
      defaultValue: "open"
    },
    timeCompleted: {
      type: Sequelize.SMALLINT,
      allowNull: true
    }
  },
  {
    paranoid: true
  }
);

module.exports = Todo;
