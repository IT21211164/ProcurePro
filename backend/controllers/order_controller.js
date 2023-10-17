const orderModel = require('../models/order')
const asyncHandler = require('express-async-handler')

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

// read a blog
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


// read all available blogs
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
/*
const displayOrders = asyncHandler(async(req,res)=>{

    const response = await orderModel.find();
    if(response){
        res.status(200).json(response)
    }
    else{
        res.status(401).json('something is wrong orders can not fetch')
    }
})


const getAllArticles = asyncHandler(async (req, res) => {
    try {
        // Retrieve all articles from the database
        const articles = await articleModel.find();

        if (articles.length > 0) {
            res.status(200).json(articles);
        } /*else {
            res.status(404).json({ message: 'No articles found.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error while retrieving articles.' });
    }
});*/

// update blog details
const updateBlog = asyncHandler(async(req,res)=>{
    const id = req.params.id 
    
    // check whether the blog is existing for update process
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

// delete a blog
const deleteBlog = asyncHandler(async(req,res)=>{
    const id = req.params.id 
    const response = await blogModel.findByIdAndDelete(id)
    if(response){
        res.status(202).json(response)
    }
    else{
        res.status(400).json({error: 'record deleted'})
    }
})


module.exports = {
    addOrder,
    readOrder,
    displayOrders
}