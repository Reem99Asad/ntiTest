const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/myDb')

const User=new mongoose.model('User',{
    name:{ type:String },
    email:{ type:String }
})
 
myData=new User({
name:"reem", email:"reem@gmail.com"
})
myData.save()
.then(()=>console.log(data))
.catch(e=>console.log(e))