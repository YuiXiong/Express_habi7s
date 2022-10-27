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
      console.log("task creation done", taskCreate._id);

      await boardModel.findByIdAndUpdate(req.params.id, {
        $push: {
          tasks: taskCreate._id,
        },
      });
      console.log("done");
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "failed to create task" });
    }

    return res.json();
  },

  index: async (req, res) => {
    //index task given board object id. board task is an array of objectID.

    try {
      board = await boardModel
        .findById(req.params.id)
        .populate("tasks", "task");
      console.log(board);
    } catch {
      res.send(500).json({ error: "failed to return board" });
    }
    return res.json(board);
  },

  getById: async (req, res) => {
    //returns a string of an individual task given objectID
    let task = null;

    try {
      task = await taskModel.findById(req.params.taskId);
    } catch (err) {
      res.status(500);
      return res.json({ error: "failed to return task" });
    }
    return res.json(task.task);
  },

  updateById: async (req, res) => {
    let task = null;
    try {
      task = await taskModel.updateOne(
        { _id: req.params.taskId },
        { task: req.body.task, 
          quadrant: req.body.quadrant 
        });
        //enums validators
    } catch (err) {
      res.status(500);
      return res.json({ error: `Fail to get id ${req.params.taskId}` });
    }
    return res.json();
  },
};
