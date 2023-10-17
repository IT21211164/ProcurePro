const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
	driverName: {
		type: String,
		required: true,
	},
	driverNIC: {
		type: String,
		required: true,
	},
	driverLicense: {
		type: String,
		required: true,
	},
	driverTelephone: {
		type: Number,
		required: true,
	},
	driverStatus: {
		type: String,
		default: "Available",
	},
});

module.exports = mongoose.model("Driver", driverSchema);
