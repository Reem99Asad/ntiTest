const { ObjectId } = require('mongodb').ObjectId
const dbCon= require('../models/dbConnections')



const addcustomer=(req,res)=>{
    
    res.render('add',{
        pageTitle:"add customer"
    })
}
const savecustomer=(req,res)=>{
    
    let customer =req.body
    dbCon((err,db)=>{
        if(err) res.send(err)
        db.collection('students').insertOne(user,(error,result)=>{
             if(error) res.send(error)
             res.redirect('/')
            }
             )
    })
}
const getAll = (req,res) => {
    //read from db
    dbCon((error, db)=>{
        if(error) res.send(error)
        db.collection('user').find().toArray((err, allUsers)=>{
            if(err) res.send(err)
            res.render('all',{
                pageTitle:"all Users",
                data:allUsers,
                isEmpty:allUsers.length==0? true: false
            })
        
        })
    })
}
const deleteUser = (req,res) => {
    dbCon((error, db)=>{
        if(error) res.send(error)
        db.collection('user').deleteOne({_id: new ObjectId(req.params.id)})
        .then(()=> res.redirect('/'))
        .catch(e=> res.send(e))
    })
}


const editUser = (req,res) => {
    //edit in db
    dbCon((err, db)=>{
        if(err) res.send(err)
        db.collection('user').findOne({_id: new ObjectId(req.params.id)}, (e, data)=>{
            if(e) res.send(e) 
            if(!data) res.render('err404', {
                pageTitle:"User Not Found",
                err: `No user With id ${req.params.id}`
            })
          res.render('edit',{
              pageTitle:"Edit User",
              user: allUser[userIndex]
          })    
      }
    }
  const updateUser = (req,res) => {
      let userIndex = (allUser, req.params.id)
      
      db.collection('user').updateOne({_id: new ObjectId(req.params.id)})
      allUser[userIndex].name= req.body.name
      allUser[userIndex].age= req.body.age
      allUser[userIndex].email= req.body.email
      allUser[userIndex].address= req.body.address
    
      res.redirect('/')
  }

  


module.exports={addcustomer,savecustomer,getsingle,editUser,updateUser}