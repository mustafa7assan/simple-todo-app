const homePage = (req, res) => {
  res.render("index", { todos: [] });
};

const deleteTodo = (req, res) => {
  res.redirect("/");
};

const createTodo = (req, res) => {
  res.redirect("/");
};

const todoController = {
  homePage,
  deleteTodo,
  createTodo,
};

export default todoController;
