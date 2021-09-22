const express = require("express")
const app =express()


const userRoutes=require('../routes/user.routes')
require('dotenv').config()
require('../db/connection')

app.use(express.json())
app.use(userRoutes)
app.get('/Test',(req,res)=>{
    res.send('test')
})

module.exports=app

