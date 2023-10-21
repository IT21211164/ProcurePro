const invoiceModel = require('../models/invoice')
const asyncHandler = require('express-async-handler')


const addInvoice = asyncHandler( async(req,res) => {

    const {date, orderNo, billFrom, billTo, siteLocation,totalAmount} = req.body

    const existing = await invoiceModel.findOne({orderNo})
    if(existing){
        throw new Error(`An invoice is already created for Order Number ${orderNo}`)
    }

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

/*
const readOrder = asyncHandler(async(req,res)=>{

    const id = req.params.id
    console.log(id);
    const response = await orderModel.findById(id)
    if(response){
        res.status(200).json(response)
    }
    else{
        res.status(401).json('something is wrong order can not fetch')
    }

})


const displayOrders = asyncHandler(async(req,res)=>{
    const status = req.params.status
    console.log(status);
    const response = await orderModel.find({status:status});
    if(response){
        res.status(200).json(response)
    }
    else{
        res.status(401).json('something is wrong orders can not fetch')
    }
})


const updateBlog = asyncHandler(async(req,res)=>{
    const id = req.params.id 
 
    const checkInstance = await blogModel.findById(id)

    if(checkInstance){
        const response = await blogModel.findByIdAndUpdate(id , {...req.body})
        if(response){
            res.status(200).json(response)
        }
        else{
            res.status(403).json('blog can not be updated')
        }
    }
    else{
        res.status(404).json('blog does not exist in the database')
    }

})


const deleteBlog = asyncHandler(async(req,res)=>{
    const id = req.params.id 
    const response = await blogModel.findByIdAndDelete(id)
    if(response){
        res.status(202).json(response)
    }
    else{
        res.status(400).json({error: 'record deleted'})
    }
})*/

/*
module.exports = {
    invoice_controller,
}*/