const mongoose=require('mongoose')
const validator=require('validator')
const bycrypt=require('bcryptjs')

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
        trim:true,
       // match :/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.\]).{8,32}$/
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
    age:{
        type:Number,
        validate(value){
            if(value<21) throw new Error(' not avaliable')
        }
    }, 
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
//handle response
userSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
    delete user.__v
    return user
}

//encrypt password
userSchema.pre('save',async function(){
    const user=this
    if(user.isModified('password')){
        user.password=await bycrypt.hash(user.password,12)
    }
})
//login 
userSchema.statics.loginUser=async(email,password)=>{
    const user=await User.findOne({email})
    if(!user) throw new Error('invalid email')
    const isValidPass = await bycrypt.compare(password,user.password)
    if (!isValidPass) throw new Error('invalid password')
    return user
}
const jwt=require('jsonwebtoken')
//generate token 
userSchema.methods.generateToken=async function(){
    const user=this
    const token=jwt.sign({_id:user._id},process.env.JWTKEY)
    user.tokens=user.tokens.concat({token})
    await user.save()
    return token
}
//logout
const User = mongoose.model('User', userSchema)

module.exports = User

