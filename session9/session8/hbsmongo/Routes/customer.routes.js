const router = require("express").Router()
const customerController=require('../controller/customer.controller')

router.get('/addcustomer',customerController.addcustomer)
router.post('/addcustomer',customerController.savecustomer)

router.get('/search/:id',customerController.searchCustomer)

router.get('/show',customerController.showAllCustomer)

router.get('/withdraw/:id', customerController.withdrawfrombalance)
router.post('/update/:id', customerController.updateCustomerdata)

module.exports=router