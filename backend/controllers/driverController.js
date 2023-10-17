const Driver = require("../models/driverModel");

// Create a new driver
exports.createDriver = async (req, res) => {
	try {
		const driver = await Driver.create(req.body);
		res.status(201).json(driver);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Get all drivers
exports.getDrivers = async (req, res) => {
	try {
		const drivers = await Driver.find();
		res.status(200).json(drivers);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Get a driver by ID
exports.getDriverById = async (req, res) => {
	try {
		const driver = await Driver.findById(req.params.id);
		if (!driver) {
			res.status(404).json({ error: "Driver not found" });
		} else {
			res.status(200).json(driver);
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Update a driver by ID
exports.updateDriver = async (req, res) => {
	try {
		const driver = await Driver.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!driver) {
			res.status(404).json({ error: "Driver not found" });
		} else {
			res.status(200).json(driver);
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Delete a driver by ID
exports.deleteDriver = async (req, res) => {
	try {
		const driver = await Driver.findByIdAndDelete(req.params.id);
		if (!driver) {
			res.status(404).json({ error: "Driver not found" });
		} else {
			res.status(204).send();
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
