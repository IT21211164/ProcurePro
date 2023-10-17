const Order = require("../models/orderModel");

// @desc    Create a new order
// @route   POST /api/orders
// @access  Public
exports.createOrder = async (req, res) => {
	try {
		const { siteLocation, totalAmount, status } = req.body;

		const order = new Order({
			siteLocation,
			totalAmount,
			status,
		});

		const newOrder = await order.save();
		res.status(201).json(newOrder);
	} catch (error) {
		res.status(400).json({ error: "Error creating the order" });
	}
};

// @desc    Get all orders
// @route   GET /api/orders
// @access  Public
exports.getOrders = async (req, res) => {
	try {
		const orders = await Order.find();
		res.status(200).json(orders);
	} catch (error) {
		res.status(400).json({ error: "Error fetching orders" });
	}
};

// @desc    Get an order by ID
// @route   GET /api/orders/:id
// @access  Public
exports.getOrderById = async (req, res) => {
	try {
		const order = await Order.findById(req.params.id);

		if (order) {
			res.status(200).json(order);
		} else {
			res.status(404).json({ error: "Order not found" });
		}
	} catch (error) {
		res.status(400).json({ error: "Error fetching the order" });
	}
};

// @desc    Update an order by ID
// @route   PUT /api/orders/:id
// @access  Public
exports.updateOrder = async (req, res) => {
	try {
		const { siteLocation, totalAmount, status } = req.body;

		const order = await Order.findById(req.params.id);

		if (order) {
			order.siteLocation = siteLocation;
			order.totalAmount = totalAmount;
			order.status = status;

			const updatedOrder = await order.save();
			res.status(200).json(updatedOrder);
		} else {
			res.status(404).json({ error: "Order not found" });
		}
	} catch (error) {
		res.status(400).json({ error: "Error updating the order" });
	}
};

// @desc    Delete an order by ID
// @route   DELETE /api/orders/:id
// @access  Public
exports.deleteOrder = async (req, res) => {
	try {
		const order = await Order.findById(req.params.id);

		if (order) {
			await order.deleteOne();
			res.status(200).json({ message: "Order removed" });
		} else {
			res.status(404).json({ error: "Order not found" });
		}
	} catch (error) {
		res.status(400).json({ error: "Error deleting the order" });
	}
};
