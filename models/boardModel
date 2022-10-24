const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tasks: {
    type: String,
  },
  owner: {
    type: Array,
  },
  shared: {
    type: Array,
  },
});

const BoardModel = mongoose.model("Board", boardSchema);
module.exports = BoardModel;
