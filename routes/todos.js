"use strict";

const express = require("express");
const router = express.Router();
const models = require("../models");
const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
var utc = require('dayjs/plugin/utc')

dayjs.extend(relativeTime)
dayjs.extend(utc)

/** GET todos */
router.get("/", async (req, res, next) => {
  let todos;
  let statusQuery = req.query.status || "all";

  if (statusQuery !== "all") {
    todos = await models.Todo.findAll(
      { where: { status: statusQuery } },
      { raw: true }
    );

    todos.forEach(todo => {
      if (todo.timeCompleted) {
        todo.timeCompleted = dayjs(todo.timeCompleted).format('DD/MM/YYYY')
        todo.timeCompletedAgo = dayjs().from(todo.timeCompleted, false)

      }
    });

    res.render("todos", { todos, statusQuery });
  } else {
    todos = await models.Todo.findAll({ raw: true });

    todos.forEach(todo => {
      if (todo.timeCompleted) {
        todo.timeCompleted = dayjs(todo.timeCompleted).format('DD/MM/YYYY HH:mm')
        todo.timeCompletedAgo = dayjs.utc().from(todo.timeCompleted, true)
      }
    });
    
    res.render("todos", { todos, statusQuery: "all" });
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
  console.log(req.query.status)

  await models.Todo.update(
    { status: req.query.status, timeCompleted: dayjs.utc(req.query.timeCompleted).toISOString() },
    { where: { id: req.params.id } }
  );

  res.json({ message: "Todo status update successfull" });
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
