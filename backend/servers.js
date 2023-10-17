const cors = require('cors')
const dbConnect = require('./config/dbConnect')
const express = require('express')
const errorHandler  =require('./middleware/errorMiddleware')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 2500
const authRoutes = require('./routes/user_test_route');

dbConnect()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/auth', authRoutes);
app.use('/api/orders', require('./routes/order_route'));
app.use('/api/invoice', require('./routes/invoice_route'));
//app.use('/api/invoice', require('./controllers'));


app.use(errorHandler)
app.listen(PORT , '0.0.0.0', ()=>{
    console.log(`🤖 Server is up and running on port ${PORT} 🤖`);
})