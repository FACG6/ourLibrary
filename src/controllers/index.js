const express= require('express');

const router = express.Router();
const home = require('./home');
const loginPage = require('./loginPage');
const checkUser = require('./checkUser');
const signUpPage = require('./signUpPage');
const adduser = require('./adduser');

router.get('/', home.get);
router.get('/login', loginPage.display);
router.post('/check', checkUser.checkUser);
router.get('/signup', signUpPage.sign);
router.post('/adduser', adduser.add);

module.exports = router;
