const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	orderNumber: {
		type: Number,
		required: true,
		unique: true,
		default: function () {
			// Generate a unique five-digit order number
			return Math.floor(10000 + Math.random() * 90000);
		},
	},
	siteLocation: {
		type: String,
		required: true,
	},
	totalAmount: {
		type: Number,
		required: true,
	},
	status: {
		type: String,
		//enum: ["Pending", "Approved", "Not Approved", "Declined", "Placed"],
		default: "Pending",
	},
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
