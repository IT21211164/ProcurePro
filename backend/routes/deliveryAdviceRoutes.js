const express = require("express");
const router = express.Router();
const {
	createDeliveryAdviceNote,
	getDeliveryAdviceNotes,
	getDeliveryAdviceNoteById,
	updateDeliveryAdviceNote,
	deleteDeliveryAdviceNote,
} = require("../controllers/deliveryAdviceNoteController");

// Create a new delivery advice note
router.post("/create", createDeliveryAdviceNote);

// Get all delivery advice notes
router.get("/read", getDeliveryAdviceNotes);

// Get a specific delivery advice note by ID
router.get("/display/:id", getDeliveryAdviceNoteById);

// Update a specific delivery advice note by ID
router.put("/update/:id", updateDeliveryAdviceNote);

// Delete a specific delivery advice note by ID
router.delete("/delete/:id", deleteDeliveryAdviceNote);

module.exports = router;
