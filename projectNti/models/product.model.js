const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    categories :{
        type:String,
        required:true,
        enum:['cake','sweet','biscute'],
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    taste:{
        type:String,
        required:true,
        trim:true,
        enum:['sweet','sour','vanillia','choclate']
    },
    image:{
       type:String
    },
    price:{
        type:Number,
        required:true,
        trim:true
    }
    },
    {timestamps:true}
)
const Product=mongoose.model('Product',productSchema)
module.exports=Product