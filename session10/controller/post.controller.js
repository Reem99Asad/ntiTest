const post = require('../models/post.model')
const Post = require('../models/post.model')
const User = require('../models/user.model')
const addPost = async(req, res)=>{
    try{
        const post = new Post({
            ...req.body,
            userId: req.user._id
        })
        await post.save()
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

const singlepost= async (req,res)=>{
    try{
        const post =  await post.findOneById(req.params.id)
     
        return post.this.id=req.user._id             

        
        res.status(200).send( { apiStatus:true, data:req.user.myPosts, message:"data added"})
    }
    catch(e){
    res.status(500).send({ apiStatus:false, data:e.message, message: "error adding post data" })
    }
}

const addcomment = async(req, res)=>{
    try{
        const post =  await post.findById(req.params.id)
     
        post.comments.push(req.user._id)
        await post.save()
        res.status(200).send( { apiStatus:true, data:post, message:"comment added"})
    }
    catch(e){
        res.status(500).send({ apiStatus:false, data:e.message, message: "error adding post comment" })
    }
}

const addlike = async(req, res)=>{
    try{
        const post =await Post.findById(req.params.id)
    if(!post.likes==-1)
        post.likes.push(req.user._id)
        await post.save()
        res.status(200).send( { apiStatus:true, data:post, message:"like added"})
    }
    catch(e){
        res.status(500).send({ apiStatus:false, data:e.message, message: "error adding post like" })
    }
}
module.exports = {addPost, myPosts,singlepost,addcomment,addlike}