"use strict";

const Sequelize = require("sequelize");
const db = require("../sequelize");

const Todo = db.define(
  "todo",
  {
    title: {
      type: Sequelize.STRING
    }
  },
  {
    paranoid: true
  }
);

module.exports = Todo;
