const express = require("express");
const router = express.Router();
const {
	createDriver,
	getDrivers,
	getDriverById,
	updateDriver,
	deleteDriver,
} = require("../controllers/driverController");

// Routes for drivers
router.post("/create", createDriver);
router.get("/read", getDrivers);
router.get("/display/:id", getDriverById);
router.put("/update/:id", updateDriver);
router.delete("/delete/:id", deleteDriver);

module.exports = router;
