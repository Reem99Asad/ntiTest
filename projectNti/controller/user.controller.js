const User = require('../models/user.model')

 const register =async(req,res)=>{
   try{
       const userData=new User(req.body)
       await userData.save()
       res.status(200).send({
           apiStatus:true,
           data:userData,
           message:"data added successfuly"
       })
   }
   catch(e){
       res.status(500).send({
           apiStatus:false,
           data:e.message,
           message:"error in register"
       })
   }
 }
 const login = async(req,res)=>{
    try{
        let user = await User.loginUser(req.body.email, req.body.password)
        const token = await user.generateToken()
        res.status(200).send({ apiStatus:true, data:{user, token}, message:"logged in" })
    }
    catch(e){
        res.status(500).send({ apiStatus:false, data:e.message, message:"cannot login" })
    }
 }
const logOut = async(req,res)=>{
    try{  
        req.user.tokens = req.user.tokens.filter(singleToken=>{
            return singleToken.token != req.token
        })
        req.user.save()
        res.send({apiStatus:true, data:"", message:"logged out from this device"})
    }
    catch(e){
        res.status(500).send({ apiStatus:false, data:e.message, message: 'error'})
    }
}
 const addOrder=async(req,res)=>{
     try{
         const user =await User.findById(req.params.id)
         const order=req.body
         user.orders.push(order)
         if(req.user.position=="customer")
         await user.save()
         res.status(200).send({
             apiStatus:true,
             data:user,
             message:"order added successfully "
         })
     }
catch(e){
    res.status(500).send({
        apiStatus:false,
        data:e.message,
        message:"error in add order"
    })
}
 }
 const addreview=async(req,res)=>{
    try{
        const user =await Customer.findById(req.params.id)
        user.review=req.body
        if(req.user.position=="customer")
        await user.save()
        res.status(200).send({
            apiStatus:true,
            data:user,
            message:"review added successfully , thanks "
        })
    }
catch(e){
   res.status(500).send({
       apiStatus:false,
       data:e.message,
       message:"error in add review"
   })
}
}
const me =async(req,res)=>{res.send(req.user)}
 module.exports={register,addOrder,addreview,login,logOut,me}