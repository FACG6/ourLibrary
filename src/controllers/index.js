const express = require('express');
const jwt = require('jsonwebtoken');
const SECRET = 'israa';

const router = express.Router();
const home = require('./home');
const getBooks = require('../database/queries/getBooks');

router.get('/', home.get);
const loginPage = require('./loginPage');
const checkUser = require('./checkUser');

router.get('/', home.get);
router.get('/login', loginPage.display);
router.post('/check', checkUser.checkUser);
module.exports = router;
