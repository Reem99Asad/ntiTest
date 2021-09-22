const router =require('express').Router()
const userController=require('../controller/book.controller')

const book=require('../models/book.model')

router.post('/addbook',(req,res)=>{
    const books=new book(req.body)
    books.save()
    .then(()=>res.send(books))
    .catch(errors=>res.send(errors))
})
router.edit('/all/:id',async(req,res)=>{
    avalUpdatates = ["name", "author","category"]
    requested = Object.keys(req.body)

})
router.deletebook('/all/:id',async(req,res)=>{
try {
    const mybook = await User.findByIdAndDelete(req.params.id)
    if(!mybook)  res.send('book not found')
    res.send('deleted')
}  
 catch  {
      res.send(error)
}
})


router.get('/all/:id',async(req,res)=>{
    try {
        const mybook = await User.findById(req.params.id)
        if(!mybook) res.send('user not found')
        res.send(mybook)
    }
     catch  {
          res.send(error)
    }
})


router.get('/all',async(req,res)=>{
    try {
        const mybook = await User.find()
        res.send(mybook)
    }
     catch  {
          res.send(error)
    }
})
module.exports=router