import mongoose from "mongoose";
// Todo Schema
const todoSchema = mongoose.Schema({
  text: String,
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});
// Todo Model
const Todo = mongoose.model("Todo", todoSchema);
// Todo Model Operations

// Get all todo from database
const getAllTodos = async () => {
  const todos = await Todo.find();
  return todos;
};
// Create new todo and saved to database
const createTodo = async (text) => {
  try {
    await Todo.create({
      text: text,
    });
  } catch (e) {
    console.log(e.message);
  }
};

const deleteTodo = async (id) => {
  try {
    await Todo.deleteOne({ _id: id });
  } catch (e) {
    console.log(e.message);
  }
};

const todoModel = {
  getAllTodos,
  createTodo,
  deleteTodo,
};

export default todoModel;
