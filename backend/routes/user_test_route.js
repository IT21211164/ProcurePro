// routes/user_test_controller.js

const express = require("express");
const UserController = require("../controllers/user_test_controller");
const OrderController = require("../controllers/order_controller");

const router = express.Router();

router.post("/login", UserController.login);
router.post("/register", UserController.register);


module.exports = router;
