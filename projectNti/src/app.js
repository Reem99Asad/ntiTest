const express=require('express')
const multer=require('multer')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()

require('dotenv').config()
require('../models/db/connection')

const userRoutes=require('../routes/user.routes')
const productRoutes=require('../routes/product.routes')


app.use(cors())

app.use(express.urlencoded({extended:true}))

app.use(express.json())
 
app.use('/user',userRoutes)
app.use('/product',productRoutes)

let storage=multer.diskStorage({
    destination:function(req,file,cb){cb(null,'images')},
    filename:function(req,file,cb){cb(null,file.originalname)}
})
upload=multer({storage})
app.post('/uploadimage',upload.single('image'),(req,res,next)=>{
    const file=req.file
    res.send(file)
})


module.exports=app