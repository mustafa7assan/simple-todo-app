import mongoose from "mongoose";
const todoSchema = mongoose.Schema({
  text: String,
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Todo = mongoose.model("Todo", todoSchema);

const createTodo = async (text) => {
  try {
    await Todo.create({
      text: text,
    });
  } catch (e) {
    console.log(e.message);
  }
};

const todoModel = {
  createTodo,
};

export default todoModel;
