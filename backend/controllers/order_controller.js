const orderModel = require('../models/order')
const asyncHandler = require('express-async-handler')

//Create order
const addOrder = asyncHandler( async(req,res) => {

    const {siteLocation ,totalAmount ,status} = req.body

    const response = await orderModel.create({
        siteLocation: siteLocation,
        totalAmount: totalAmount,
        status: status
    })

    if(response){
        res.status(201).json({
            id: response._id,

        })
    }
    else{
        res.status(403).json('article could not be created!')
    }
})


// read supplier orders
const displayOrders = asyncHandler(async(req,res)=>{
    const { status_ne } = req.query;
    console.log(status_ne);
    const response = await orderModel.find({status:{ $ne: status_ne }});
    if(response){
        res.status(200).json(response)
    }
    else{
        res.status(401).json('something is wrong orders can not fetch')
    }
})



// update order status
const updateOrderStatus = asyncHandler(async(req,res)=>{
    const id = req.params.id 
    
    // check whether the order is existing for update process
    const checkInstance = await orderModel.findById(id)

    if(checkInstance){
        const newStatus = { status: req.body.orderStatus };
        const response = await orderModel.findByIdAndUpdate(id , newStatus, { new: true })
        if(response){
            res.status(200).json(response)
        }
        else{
            res.status(403).json('order can not be updated')
        }
    }
    else{
        res.status(404).json('order does not exist in the database')
    }

})



module.exports = {
    addOrder,
    displayOrders,
    updateOrderStatus
}