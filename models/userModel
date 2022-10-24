const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Array,
  },
  shared: {
    type: Array,
  },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
