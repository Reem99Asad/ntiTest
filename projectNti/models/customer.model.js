const mongoose=require('mongoose')
const validator=require('validator')
const bcryptjs=require('bcryptjs')

const customerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    }, 
    email:{
        type:String,
        required:true,
        trim:true,
        unique: true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('invalid email format')
        }
    }, 
    phone:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isMobilePhone(value, ['ar-EG'])) throw new Error( 'not egy number')
        }
    }, 
    password:{
        type:String,
        required:true,
        trim:true,
    }, 
     addresses :[{
         addrType:{
             type:String,
             trim:true
         },
         addrDetails:{
             type:String,
             trim:true
         }
     } ], 
    
     image:{
        type:String,
        trim:true
    }, 
    status:{
        type:Boolean,
        default: false
    }
}, 
    
    {timestamps:true}
)

const customer=mongoose.model('customer',customerSchema)
module.exports=customer