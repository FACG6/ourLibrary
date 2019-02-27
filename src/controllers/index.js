const express = require('express');

const router = express.Router();
const home = require('./home');
const loginPage = require('./loginPage');
const checkUser = require('./checkUser');
const authontication = require('./authtication');
const logout = require('./logout');
const {
  client,
  server,
} = require('./errors');

router.use(authontication.auth);
router.get('/', home.get);
router.get('/login', loginPage.display);
router.post('/check', checkUser.checkUser);
// router.get('/sigup', (req, res) => {
//   res.render('signup');
// });
router.get('/logout', logout.out);
router.use(client);
router.use(server);
module.exports = router;
