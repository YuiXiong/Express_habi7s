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
    //index task given board object id. board task is an array of objectID. to populate and return task.

    try {
      boards = await boardModel.findById(req.params.id);
      
      console.log("boards detail: ", boards);
      let mappingTask=[]
      mappingTask = boards.tasks.map(task =>{
        return task
      })
      console.log("mappingTask: ", mappingTask)
    } catch {
      res.send(500);
      return res.json({ error: "failed to return board" });
    }
    return res.json(boards);
  },
};
