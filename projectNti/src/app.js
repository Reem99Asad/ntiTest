const express=require('express')
const app=express

require('dotenv').config
require('../models/db/connection')

const userRoutes=require('../routes/customer.routes')

const cors=require('cors')
const { model } = require('mongoose')
app.use(cors())

app.use(express.urlencoded({extended:true}))

app.use(express.json())
 
app.use('/customer',userRoutes)

module.exports=app