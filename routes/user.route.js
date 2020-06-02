const express = require('express');
const router=express.Router();

const user_controller=require('../controllers/user.controller');

//login page
router.get('/login',user_controller.fetchloginform);// this is getting loginform
router.post('/login',user_controller.loginchk);// this is checking userid and password

//dashboard page
router.get('/dashboard',user_controller.redirectLogin,user_controller.dashboard);//first redirecting to the login page if user is not loggedin
router.get('/logout',user_controller.logout);//logout 

module.exports=router;