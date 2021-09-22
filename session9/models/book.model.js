const mongoose=require('mongoose')
const validator=require('validator')
 
const book=mongoose.model('book',{
    bookname:{ 
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        minlength:3,
        maxlength:20
    },
    author:{
        type:String,
        name:String,
        trim:true,
        required:true,
    },
    category:{
        type:String,
        trim : true,
        enum:["web", "mobile","desktop"]
    },
    num_pages:{
        type:Number,
        minlength:500,
        maxlength:10000,

    }
}
)
module.exports = book