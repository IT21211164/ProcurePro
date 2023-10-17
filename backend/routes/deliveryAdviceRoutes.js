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
router.post("/", createDeliveryAdviceNote);

// Get all delivery advice notes
router.get("/", getDeliveryAdviceNotes);

// Get a specific delivery advice note by ID
router.get("/:id", getDeliveryAdviceNoteById);

// Update a specific delivery advice note by ID
router.put("/:id", updateDeliveryAdviceNote);

// Delete a specific delivery advice note by ID
router.delete("/:id", deleteDeliveryAdviceNote);

module.exports = router;
