const mongoose = require("mongoose");

const deliveryAdviceNoteSchema = new mongoose.Schema({
	orderID: {
		type: String,
		required: true,
	},
	driverName: {
		type: String,
		required: true,
	},
	deliveryDate: {
		type: String,
		required: true,
	},
	deliveryDetails: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("DeliveryAdviceNote", deliveryAdviceNoteSchema);
