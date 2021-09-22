const mongoose = require('mongoose')
const taskSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    assiend:{
        type:String,
        required:true,
        enum: ['manager'],
        trim:true
    },
    taskTitle:{
        type:String,
        required:true,
        trim:true
    },
    taskContent:{
        type:String,
        required: function(){ return this.postType=="txt"}
    },
    response:[{
        File:{},
        empId:{}
    }]
    
}, 
{timeStamps: true} )
const task = mongoose.model('task', taskSchema)
module.exports = task