const mongoose = require("mongoose");

const orderTestSchema = new mongoose.Schema({
  date:{
    type: String, required: true
  },
  item:{
    type: String, required: true
  },
  quantity:{
    type: Number, required: true
  },
  price:{
    type: Number, required: true
  },
  siteLocation:{
    type: String, required: true
  },
  totalAmount:{
    type: Number, required: true 
  },
  status:{
    type: String, required: true
  },
});

const order = mongoose.model("torder", orderTestSchema);

module.exports = order;