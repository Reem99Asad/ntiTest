const mongoose=require('mongoose')
const validator=require('validator')
const bcriptjs=require('bcryptjs')

const userSchema=new mongoose.Schema({
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
        trim:true
    },
    age:{
        type:Number,
        validate(value){
            if (value<15) throw new Error('not avaliable') 
        }
    }, 
     addresses:[{
             type:String,
             trim:true
     }], 
     Orders:[{
        ordertype:{
        type:String,
        trim:true 
    },
       orderDetails:{
         type:String,
         trim:true
       }
    }], 
    tokens:[{ token:{type:String, required:true} } ],
 reviews:[{
    type:String,
    trim:true
}
],
position:{
    type:String,
    required:true,
    trim:true
}
},   
    {timestamps:true}
)
userSchema.virtual('myProducts',{
    ref:"Product",
    localField:"_id",
    foreignField:"userId"
})
//handel response
userSchema.methods.toJSON=function(){
    const user=this.toObject()
    delete user.password
    delete user.__v
    return user
}
//encrypt password
userSchema.pre('save',async function(){
    const user=this
    if(user.isModified('password')){
        user.password=await bcriptjs.hash(user.password,12)
    }
})
//login
userSchema.statics.loginUser=async(email,password)=>{
    const user=await User.findOne({email})
    if(!user) throw new Error('Invalid email')
    const isValidPass = await bcriptjs.compare(password,user.password)
    if(!isValidPass) throw new Error ('invalid password')
    return user
}
const jwt =require('jsonwebtoken')
//generate token
userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id}, process.env.JWTKEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

const User=mongoose.model('User',userSchema)
module.exports=User