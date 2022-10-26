const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
  },
  quadrant: {
    type: String,
    enum: ['urgentImportant', 'urgentNotImportant', 'notUrngetImportant', 'notUrngetNotImportant']
  },
  dueAt: {
    type: Date,
  },
});

const TaskModel = mongoose.model("Task", taskSchema);
module.exports = TaskModel;
