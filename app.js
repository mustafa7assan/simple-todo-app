import express from "express";
import mongoose from "mongoose";
import todoController from "./controllers/todoController.js";

const app = express();
// Connect to Database
const uri = "mongodb://http://127.0.0.1/todo_db";
mongoose.set("strictQuery", true);
mongoose.connect(uri).catch((err) => {
  console.log(err.reason);
});
// App Configuration
app.set("port", 3000);
app.set("view engine", "ejs");
// App Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
// App Routes
app.get("/", todoController.homePage);
app.post("/create", todoController.createTodo);
app.get("/delete/:index", todoController.deleteTodo);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
