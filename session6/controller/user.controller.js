//const router=require("express").Router()
//const userController =require('../cotroller/user.controller')
//router.get('',userController.test)
const { Console } = require('console')
const fs =require('fs')
const readjsonfile=()=>{
    let allUsers
    try{
        allUsers=JSON.parse(fs.readFileSync('models/users.json').toString())
       if(!Array.isArray(allUsers)) throw new Error() 
    }
    catch(e)
    {
        allUsers=[]
    }
    return allUsers
}
const savejsonfile=(allUsers)=>{
    fs.writeFileSync('models/users.json',JSON.stringify(allUsers))
}
const getALL=(req,res)=>{
    res.render('all',{
        pageTitle:"all Users"
    })
}
const getsingle=(req,res)=>{
    res.render('single',{
        pageTitle:"single Users"
    })
}
const saveUser=(req,res)=>{
    let allUsers=readjsonfile()
    let user = {
        id: Date.now(),
        ...req.body
    }
    allUsers.push(req.body)
    savejsonfile(allUsers)
    res.redirect('/')
}
const deleteUser = (req,res) => {
    let allUser = readJsonFile()
    // let user = allUser.find(ele=>{
    //     return ele.id==req.params.id
    // })
    // res.send(user)
    let userIndex = searchUser(allUser, req.params.id)
    if(userIndex==-1)
    Console.log('user not found')
    else{
        allUser.splice(userIndex,1)   
    }
    savejsonfile(allUser)
    res.redirect('/')
}
const edituser=(req,res)=>{
    res.render('edit',{
        pageTitle:"edit Users"
    })
}
const adduser=(req,res)=>{
    res.render('add',{
        pageTitle:"add Users"
    })
}
const err404 = (req,res)=>{
    res.render('err404', {
        pageTitle:"Error Page",
        err: "not found"
    })
}
module.exports={
    adduser,getALL,getsingle,edituser,saveUser,err404,deleteUser
}