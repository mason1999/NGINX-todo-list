const express = require("express");
const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

// GET all todos
router.get("/", getTodos);

// POST a new todo
router.post("/", createTodo);

// DELETE a todo
router.delete("/:id", deleteTodo);

// UPDATE a todo
router.put("/:id", updateTodo);

module.exports = router;
