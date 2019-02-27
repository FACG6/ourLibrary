const express = require('express');
const {
  verify,
} = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();
const home = require('./home');
const getBooks = require('../database/queries/getBooks');

router.get('/', home.get);
const loginPage = require('./loginPage');
const checkUser = require('./checkUser');
const {
  client,
  server,
} = require('./errors');

router.use((req, res, next) => {
  if (req.cookies) {
    verify(req.cookies.jwt, process.env.SECRET, (error, infoJwt) => {
      if (error) {
        res.clearCookie('jwt');
      } else {
        req.token = infoJwt;
      }
    });
  }
  next();
});
router.get('/', home.get);
router.get('/login', loginPage.display);
router.post('/check', checkUser.checkUser);
router.get('/home', home.get);
router.get('/sigup', (req, res) => {
  res.render('signup');
});
router.use(client);
router.use(server);
module.exports = router;
