
const express = require("express");
const OrderController = require("../controllers/order_controller");

const router = express.Router();


router.get("/displayorders", OrderController.displayOrders);
router.put("/updateorderstatus/:id", OrderController.updateOrderStatus);
router.post('/addorder', OrderController.addOrder);

module.exports = router;