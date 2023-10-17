const express = require("express");
const InvoiceController = require("../controllers/invoice_controller");

const router = express.Router();

router.post('/addInvoice', InvoiceController.addInvoice);

module.exports = router;