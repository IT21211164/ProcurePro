const DeliveryAdviceNote = require("../models/deliveryAdviceNoteModel");

// Create a new delivery advice note
exports.createDeliveryAdviceNote = async (req, res) => {
	try {
		const deliveryAdviceNote = await DeliveryAdviceNote.create(req.body);
		res.status(201).json(deliveryAdviceNote);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Get all delivery advice notes
exports.getDeliveryAdviceNotes = async (req, res) => {
	try {
		const deliveryAdviceNotes = await DeliveryAdviceNote.find();
		res.status(200).json(deliveryAdviceNotes);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Get a specific delivery advice note by ID
exports.getDeliveryAdviceNoteById = async (req, res) => {
	try {
		const deliveryAdviceNote = await DeliveryAdviceNote.findById(
			req.params.id
		);
		if (!deliveryAdviceNote) {
			res.status(404).json({ error: "Delivery advice note not found" });
		} else {
			res.status(200).json(deliveryAdviceNote);
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Update a specific delivery advice note by ID
exports.updateDeliveryAdviceNote = async (req, res) => {
	try {
		const deliveryAdviceNote = await DeliveryAdviceNote.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true, runValidators: true }
		);
		if (!deliveryAdviceNote) {
			res.status(404).json({ error: "Delivery advice note not found" });
		} else {
			res.status(200).json(deliveryAdviceNote);
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Delete a specific delivery advice note by ID
exports.deleteDeliveryAdviceNote = async (req, res) => {
	try {
		const deliveryAdviceNote = await DeliveryAdviceNote.findByIdAndDelete(
			req.params.id
		);
		if (!deliveryAdviceNote) {
			res.status(404).json({ error: "Delivery advice note not found" });
		} else {
			res.status(204).send();
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
