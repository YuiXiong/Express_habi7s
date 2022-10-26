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

    // //update board to have task object id
    // let board = null
    // try {
    //     board = await boardModel.findByIdAndUpdate(req.params.id, {
    //       tasks: req.body.name,
    //     });
    //   } catch (err) {
    //     res.status(500);
    //     return res.json({ error: `Fail to get id ${req.params.id}` });
    //   }

    return res.json();
  },
};