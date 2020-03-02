"use strict";

const express = require("express");
const router = express.Router();
const models = require("../models");

/** GET todos */
router.get("/", async (req, res, next) => {
  try {
    let todos;
    const statusQuery = req.query.status;
    console.log(statusQuery)
    if (statusQuery !== 'all') {
      todos = await models.Todo.findAll(
        { where: { status: statusQuery } },
        { raw: true }
      );
        console.log(statusQuery)

      res.render("todos", { todos, statusQuery });
    } else {
      todos = await models.Todo.findAll({ raw: true });
      res.render("todos", { todos, statusQuery: 'all' });
    }
  } catch (error) {
    throw new Error(error);
  }
});

// Add a todo
router.get("/add", (req, res) => {
  try {
    res.render("addTodo");
  } catch (error) {
    throw new Error(error);
  }
});

/* GET todo */
router.get("/:id", async (req, res, next) => {
  try {
    const todo = await models.Todo.findByPk(req.params.id, { raw: true });
    console.log(todo);

    res.render("todo", { todo });
  } catch (error) {
    res.redirect("/todos");
    throw new Error(error);
  }
});

/* GET todo edit */
router.get("/edit/:id", async (req, res, next) => {
  try {
    const todo = await models.Todo.findByPk(req.params.id, { raw: true });

    res.render("edit", { todo });
  } catch (error) {
    throw new Error(error);
  }
});

/* EDIT todo */
router.post("/edit/:id", async (req, res, next) => {
  try {
    await models.Todo.update(req.body, { where: { id: req.params.id } });

    res.redirect(`/todos/${req.params.id}`);
  } catch (error) {
    throw new Error(error);
  }
});

/** Update todo status  */
router.patch("/edit/:id", async (req, res) => {
  try {
    await models.Todo.update(
      { status: req.query.status, timeCompleted: req.query.timeCompleted },

      { where: { id: req.params.id } }
    );

    res.json({ message: "models.Todo status update successfull" });
  } catch (error) {
    throw new Error(error);
  }
});

// Add a todo
router.get("/add", (req, res) => {
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
    await models.Todo.create(todo);
    res.redirect("/todos");
  } catch (error) {
    throw new Error(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const todo = await models.Todo.findByPk(req.params.id);

    await todo.destroy();

    res.json({ message: "models.Todo deleted." }).status(200);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
