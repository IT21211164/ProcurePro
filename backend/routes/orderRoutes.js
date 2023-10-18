const express = require("express");
const router = express.Router();

const {
	createOrder,
	getOrders,
	getOrderById,
	updateOrder,
	deleteOrder,
} = require("../controllers/orderController");

// Routes for orders
router.post("/create", createOrder);
router.get("/read", getOrders);
router.get("/display/:id", getOrderById);
router.put("/update/:id", updateOrder);
router.delete("/delete/:id", deleteOrder);

module.exports = router;
