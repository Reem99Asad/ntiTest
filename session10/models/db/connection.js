const mongoose=require('mongoose')

try{
    mongoose.connect(process.env.DB)
}
catch{
    console.log(e)
}
