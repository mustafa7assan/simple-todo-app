import express from "express";
import todoController from "./controllers/todoController.js";

const app = express();

app.set("port", 3000);
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", todoController.homePage);
app.post("/create", todoController.createTodo);
app.get("/delete/:index", todoController.deleteTodo);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
