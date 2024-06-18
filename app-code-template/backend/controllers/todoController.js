const Todo = require("../models/todoModel");
const mongoose = require("mongoose");

// get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create a todo
const createTodo = async (req, res) => {
  try {
    const { todo, status } = req.body;
    const newTodo = await Todo.create({ todo, status: false });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update a todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedTodo = await Todo.updateOne({ _id: id }, { status: !status });
    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
