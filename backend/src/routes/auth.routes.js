const express=require('express')
const authController=require("../controllers/auth.controller")

const router=express.Router()

// user auth APIs
router.post('/user/register',authController.reqisterUser)
router.post('/user/login',authController.loginUser)
router.post('/user/logout',authController.logoutUser)

//foodpartner auth APIs
router.post('/foodpartner/register',authController.registerFoodPartner)
router.post('/foodpartner/login',authController.loginFoodPartner)
router.post('/foodpartner/logout',authController.logoutFoodPartner)

module.exports=router