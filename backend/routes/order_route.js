
const express = require("express");
const OrderController = require("../controllers/order_controller");

const router = express.Router();


router.post("/displayorders", OrderController.displayOrders);
router.post("/readorder", OrderController.readOrder);

module.exports = router;