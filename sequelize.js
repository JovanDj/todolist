"use strict";

const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./todolist.sqlite"
});

module.exports = sequelize;
