const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
  },
  quadrant: {
    type: String,
    enum: ['urgentImportant', 'urgentNotImportant', 'notUrgentImportant', 'notUrgentNotImportant']
  },
  dueAt: {
    type: Date,
  },
});

const TaskModel = mongoose.model("Task", taskSchema);
module.exports = TaskModel;
