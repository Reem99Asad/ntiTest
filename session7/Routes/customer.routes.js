const router = require("express").Router()
const customerController=require('../controller/customerControl')

router.get('/addcustomer',customerController.addcustomer)
router.post('/addcustomer',customerController.savecustomer)

router.get('/search',customerController.searchCustomer)

router.get('/showAllCustomer',customerController.showAllCustomer)
router.get('/addBalance',customerController.addBalance)

router.get('/withdraw',customerController.withdraw)
router.get('/update',customerController.updateCustomer)

module.exports=router