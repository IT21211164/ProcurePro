
const express = require("express");
const OrderController = require("../controllers/order_controller");

const router = express.Router();


router.post("/displayorders/:status", OrderController.displayOrders);
router.post("/readorder/:id", OrderController.readOrder);
router.post('/addorder', OrderController.addOrder);

module.exports = router;