"use strict";

async function deleteTodo(id) {
  try {
    console.log("DELETING", id);

    const res = await fetch("/todos/delete/" + id, { method: "DELETE" });

    console.log(res);
    window.location.replace("/todos");
    console.log("Todo deleted");
  } catch (error) {
    console.log(error);
  }
}
