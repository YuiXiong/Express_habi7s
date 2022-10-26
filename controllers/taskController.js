const jwt = require("jsonwebtoken");
const taskModel = require("../models/taskModel");
const boardModel = require("../models/boardModel");
const mongoose = require("mongoose");

module.exports = {
  create: async (req, res) => {
    //validations

    //create task
    try {
      const taskCreate = await taskModel.create({
        ...req.body,
        quadrant: req.body.quadrant,
        board: req.params.id,
      });
      console.log("task creation done", taskCreate._id)

      await boardModel.findByIdAndUpdate(req.params.id,{
        $push:{
          tasks: taskCreate._id
        }
      })
      console.log("done")
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "failed to create task" });
    }

    return res.json();
  },
};