const multer = require('multer')
const path = require('path')
 fs = require('fs')
 const storage = multer.diskStorage({
     destination: function(req,res,cb){
         const location = path.join('images',req.user._id.toString())
         fs.mkdir(location,(err)=>{})
         cb(null,location)
     },
     filename:function(req,file,cb){
         const myfilename = file.fieldname+"-"+Date.now()+ path.extname(file.originalname)
         cb(null,myfilename)
     }
 })

 const upload = multer({
     storage:storage,
     limits:{fieldSize:2000000}
 })
module.exports=upload
