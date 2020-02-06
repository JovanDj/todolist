"use strict";

const express = require("express");
const router = express.Router();
const db = require("../sequelize");
const Todo = require("../models/Todo");

/* GET todos */
router.get("/", async (req, res, next) => {
  try {
    const todos = await Todo.findAll({ raw: true });
    console.log(todos);

    res.render("todos", { todos });
  } catch (error) {
    throw new Error(error);
  }
});

/* GET todo */
router.get("/:id", async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id, { raw: true });
    console.log(todo);

    res.render("todo", { todo });
  } catch (error) {
    throw new Error(error);
  }
});

/* GET todo edit */
router.get("/edit/:id", async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id, { raw: true });

    res.render("edit", { todo });
  } catch (error) {
    throw new Error(error);
  }
});

/* EDIT todo */
router.post("/edit/:id", async (req, res, next) => {
  try {
    await Todo.update(req.body, { where: { id: req.params.id } });

    res.redirect(`/todos/${req.params.id}`);
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
