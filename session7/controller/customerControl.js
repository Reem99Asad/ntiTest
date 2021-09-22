const { table } = require('console')
const fs=require('fs')
const readJsonFile=()=>{
    let allcustomers
    try{
        allcustomers=JSON.parse(fs.readFileSync('models/customer.json').toString())
       if(!Array.isArray(allcustomers)) throw new Error() 
    }
    catch(e)
    {
        allcustomers=[]
    }
    return allcustomers
}
const savejsonfile=(allcustomers)=>{
    fs.writeFileSync('models/customer.json',JSON.stringify(allcustomers))
}
const addcustomer=(req,res)=>{
    
    res.render('add',{
        pageTitle:"add customer"
    })
}
const savecustomer=(req,res)=>{
    let allcustomers=readJsonFile()
    let customer ={
        accNum :Date.now(),
        status:false,
        ...req.body
    }
    allcustomers.push(customer)
    savejsonfile(allcustomers)
    res.redirect('/addcustomer')
}
const searchCustomer=(req,res)=>{
    let alldata=readJsonFile()
    if(req.query.search){
        alldata=alldata.find(el=>{
            return el.id==req.query.search
        })
    }
    res.render('search',{alldata})
}
const showAllCustomer=(req,res)=>{
    let allcustomers=readJsonFile()
    res.render('show',{
        pageTitle:"show all",
        data:allcustomers
    })
}
const addBalance=(req,res)=>{
    
    res.render('addBalance',{
        pageTitle:"add Balance"
    })
}
const savecustomer1=(req,res)=>{
    let allcustomers=readJsonFile()
    let Balance ={
        id :Date.now(),
        ...req.body
    }
    allcustomers.push(Balance)
    savejsonfile(allcustomers)
    res.redirect('/addBalance')
}
const withdraw=(req,res)=>{
    res.render('withdraw',{
        pageTitle:"withdraw from Balance"
    })
}
    const updateCustomer=(req,res)=>{
        let allcustomers=readJsonFile()
    let Balance ={
        id :Date.now(),
        ...req.body
    }
    allcustomers.push(Balance)
    savejsonfile(allcustomers)
    res.redirect('/update')
}
module.exports={addcustomer,savecustomer,searchCustomer,showAllCustomer,addBalance,savecustomer1,withdraw,updateCustomer}