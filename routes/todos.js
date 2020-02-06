"use strict";

const express = require("express");
const router = express.Router();
const db = require("../sequelize");
const Todo = require("../models/Todo");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    const todos = await Todo.findAll({ raw: true });
    console.log(todos);

    res.render("todos", { todos });
  } catch (error) {
    throw new Error(error);
  }
});

// Add a todo
router.get("/add", async (req, res) => {
  try {
    res.render("addTodo");
  } catch (error) {
    throw new Error(error);
  }
});

// Create a todo
router.post("/add", async (req, res) => {
  const { title } = req.body;

  const todo = {
    title
  };

  try {
    await Todo.create(todo);
    res.redirect("/todos");
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
