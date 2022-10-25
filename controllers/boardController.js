const jwt = require("jsonwebtoken");
const boardModel = require("../models/boardModel");
const mongoose = require("mongoose");

module.exports = {
    create: async (req, res) => {
        //validations
        const data=req.body

        try {
            const input = await boardModel.findOne({ name: data.name });
            if (input) {
              return res.status(409).json({ error: "board with same name exists" });
            }
          } catch (err) {
            return res.status(500).json("here: " , {err});
          }
        
          //to get jwt from FE and pass in as owner
          const decodedToken = jwt.decode(req.body.owner,{complete:true})
          const objId= decodedToken.payload.data.objId

          const input = { ...req.body, owner: objId}

          try {
            await boardModel.create(input);
          } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "failed to create board" });
          }
      
          return res.json();
        },

    read: async (req,res) => {
        //returns json object of board collection
        let boards =[]
        try{
         boards= await boardModel.find({});
         console.log('boards detail: ', boards)
        } catch {
            res.send(500);
            return res.json({error: "failed to return board"})
        }
        return res.json(boards);
    },

}