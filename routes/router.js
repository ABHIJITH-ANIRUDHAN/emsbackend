const express = require('express')
const router = new express.Router()
const userController = require('../controllers/userController')
//register
router.post('/employee/register',userController.userRegister)
module.exports=router