const express=require('express');
const { register, login, logout, getallUser } = require('../Controllers/UserController');
const { isAuthenticatedUser } = require('../middleware/auth');
const router=express.Router();



router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').delete(logout);

router.route('/users').get(getallUser, isAuthenticatedUser)


module.exports=router;