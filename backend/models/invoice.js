const mongoose = require("mongoose");

const invoiceTestSchema = new mongoose.Schema({
  Date:{
    type: Date, default:Date.now
  },
  orderNo: {
    type: String, required: true
  },
  billFrom: {
    type: String, required: true
  },
  billTo: {
    type: String, required: true
  },
  totalAmount: {
    type: Number, required: true
  }
  
});

const invoice = mongoose.model("invoice", invoiceTestSchema);

module.exports = invoice;