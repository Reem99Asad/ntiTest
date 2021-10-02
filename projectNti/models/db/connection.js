const mongoose=require('mongoose')

try{
    mongoose.connect(process.env.projectDB)
}
catch(e){
    console.log(e)
}