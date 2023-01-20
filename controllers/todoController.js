import todoModel from "../models/todoModel.js";
const homePage = async (req, res) => {
  const todos = await todoModel.getAllTodos();
  res.render("index", { todos: todos });
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;
  await todoModel.deleteTodo(id);
  res.redirect("/");
};

const createTodo = (req, res) => {
  const todoText = req.body.todo;
  todoModel.createTodo(todoText);
  res.redirect("/");
};

const todoController = {
  homePage,
  deleteTodo,
  createTodo,
};

export default todoController;
