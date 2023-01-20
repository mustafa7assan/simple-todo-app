const todos = ["Todo 2", "Todo 2", "Todo 3"];

const homePage = (req, res) => {
  res.render("index", { todos });
};

const deleteTodo = (req, res) => {
  const index = req.params.index;
  todos.splice(index, 1);
  res.redirect("/");
};

const createTodo = (req, res) => {
  const todo = req.body.todo;
  todos.push(todo);
  res.redirect("/");
};

const todoController = {
  homePage,
  deleteTodo,
  createTodo,
};

export default todoController;
