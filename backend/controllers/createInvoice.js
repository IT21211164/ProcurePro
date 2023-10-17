const invoiceModel = require('../models/invoice')

module.exports = async function invoice_controller(orderNo ,date ,billFrom, billTo, totalAmount){

    const existing = await invoiceModel.findOne({ orderNo });
    if(existing){
        throw new Error(`An invoice is already created for Order Number ${orderNo}`);
    }

    const invoice = new invoiceModel({
        orderNo,
        date,
        billFrom,
        billTo,
        totalAmount
    })
    await invoice.save();
    return{
        invoice:invoice
    }
}