const mongoose=require('mongoose')

try{
    mongoose.connect(process.env.projectDB)
}
catch{
    console.log(e)
}