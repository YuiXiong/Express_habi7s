const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task"
  }],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  shared: {
    type: Array,
  },
});

const BoardModel = mongoose.model("Board", boardSchema);
module.exports = BoardModel;
