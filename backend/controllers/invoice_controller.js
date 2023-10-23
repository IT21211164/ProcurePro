const invoiceModel = require('../models/invoice')
const asyncHandler = require('express-async-handler')


const addInvoice = asyncHandler( async(req,res) => {

    const {date, orderNo, billFrom, billTo, siteLocation,totalAmount} = req.body

   /* const existing = await invoiceModel.findOne({orderNo})
    if(existing){
        throw new Error(`An invoice is already created for Order Number ${orderNo}`)
    }*/

    const response = await invoiceModel.create({
        date:date,
        orderNo:orderNo,
        billFrom:billFrom,
        billTo:billTo,
        siteLocation: siteLocation,
        totalAmount: totalAmount,   
    })


    if(response){
        res.status(201).json({
            id: response._id,

        })
    }
    else{
        res.status(403).json('invoice could not be created!')
    }
})
module.exports = {
    addInvoice
}

