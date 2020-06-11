var express = require('express');
var router = express.Router();
const crypto = require('crypto');
var signup = require('../db/api/signup')
var login = require('../db/api/login')


// get data from user and sent to mysql db in a router.post as sql insert statment
router.post('/', async (req, res, next) =>{
    const {firstName, lastName,email, password, phone} = req.body;
    if(!firstName || !lastName || !email || !password || !phone) {
        res.send('all fields are required');
        return;
    }else{
        try{
            let cryptPassword = crypto.pbkdf2Sync(password, 'realtorrocks', 100000, 64, 'sha512'); 
            const passwordHashed = cryptPassword.toString('base64');
            const addingUSer = await signup.addUser(firstName, lastName, email, passwordHashed, phone);
            const userLogin = await login.checkLogin(email, passwordHashed);
            res.cookie('auth', JSON.stringify(userLogin), {maxAge: 1000* 60* 60* 24* 7});
            res.status(200).json(userLogin);
        }catch(error){
            res.status(401).json({status: 401, error: 'one or more of the inputs is invalid!'});
        }
    }
});

module.exports = router;