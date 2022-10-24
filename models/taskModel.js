const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tasks: {
    type: String,
  },
  quadrant: {
    type: String,
  },
  dueAt: {
    type: Date,
  },
});

const TaskModel = mongoose.model("Task", taskSchema);
module.exports = TaskModel;
