const express= require('express');
const router = express.Router();
const home = require('./home');
const loginPage = require('./loginPage');
const checkUser = require('./checkUser');

router.get('/',home.get);
router.get('/login', loginPage.display);
router.post('/check', checkUser.checkUser);

module.exports = router;
