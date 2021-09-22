const task = require('../models/task.model')
const Task = require('../models/task.model')
const addtask = async(req, res)=>{
    try{
        const task = new Task({
            ...req.body,
            userId: req.user._id
        })
        if(req.user.position=="manager")
        await task.save()
        res.status(200).send( { apiStatus:true, data:post, message:"data added"})
    }
    catch(e){
        res.status(500).send({ apiStatus:false, data:e.message, message: "error adding post data" })
    }
}

const myPosts= async (req,res)=>{
    try{
        await req.user.populate('myPosts')
        res.status(200).send( { apiStatus:true, data:req.user.myPosts, message:"data added"})
    }
    catch(e){
    res.status(500).send({ apiStatus:false, data:e.message, message: "error adding post data" })
    }
}

module.exports = {addtask, myPosts}
