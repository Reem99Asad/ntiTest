//const { hasSubscribers } = require('diagnostics_channel')
const express=require('express')
const path=require('path')
const app=express()

const publicDir=path.join(__dirname,'../public')
const viewDir=path.join(__dirname,'../frontend/frontend/views')
const layouts=path.join(__dirname,'../frontend/frontend/layouts')
//const viewDir =path.join()
app.use(express.static(publicDir))

app.set('view engine','hbs')
app.set('views',viewDir)
hbs.registerpartials(layouts)

app.get('',(req,res)=>{
    
    res.render('home')
})
//app.get('/test',(req,res)=>{
  //  res.send('test')
//})
//app.get('/test1',(req,res)=>{
  //  res.send('test')
//})
app.listen(3000)