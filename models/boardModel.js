const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tasks: {
    type: Array,
  },
  owner: {
    type: mongoose.ObjectId ,
  },
  shared: {
    type: Array,
  },
});

const BoardModel = mongoose.model("Board", boardSchema);
module.exports = BoardModel;
