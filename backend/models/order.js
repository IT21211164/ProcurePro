const mongoose = require("mongoose");

const orderTestSchema = new mongoose.Schema({
  siteLocation:
   { type: String, required: true},
  totalAmount: 
  { type: Number, required: true },
  status: 
  { type: String, required: true },
});

const order = mongoose.model("temporder", orderTestSchema);

module.exports = order;