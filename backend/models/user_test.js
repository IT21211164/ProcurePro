// models/User.js

const mongoose = require("mongoose");

const userTestSchema = new mongoose.Schema({
  username:
   { type: String, required: true, unique: true },
  password: 
  { type: String, required: true },
});

const User_test = mongoose.model("User", userTestSchema);

module.exports = User_test;
