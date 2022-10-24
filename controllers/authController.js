const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const mongoose = require("mongoose");

module.exports = {
  register: async (req, res) => {
    //rmb do validations
    const validatedValues = req.body;

    try {
      const user = await userModel.findOne({ email: validatedValues.email });
      if (user) {
        return res.status(409).json({ error: "user exists" });
      }
    } catch (err) {
      return res.status(500).json({ error: "failed to get user" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { ...req.body, password: hashedPassword };

    try {
      await userModel.create(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "failed to register user" });
    }

    return res.json();
  },

};
