"use strict";

async function deleteTodo(id) {
  try {
    await fetch("/todos/delete/" + id, { method: "DELETE" });
    window.location.replace("/todos");
  } catch (error) {
    console.log(error);
  }
}

async function updateTodoStatus(id, status) {
  try {
    if (status === "complete") {
      await fetch(
        `/todos/edit/${id}?status=${status}&timeCompleted=${Date.now()}`,
        {
          method: "PATCH"
        }
      );
    } else {
      await fetch(`/todos/edit/${id}?status=${status}}`, {
        method: "PATCH"
      });
    }

    window.location.replace("/todos");
  } catch (error) {
    console.log(error);
  }
}
