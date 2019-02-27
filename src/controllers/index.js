const express= require('express');

const router = express.Router();
const home = require('./home');
const loginPage = require('./loginPage');
const checkUser = require('./checkUser');
const signUpPage = require('./signUpPage');
const adduser = require('./adduser');
const addFav = require('./addfav');
const displyFav = require('./displayFav');
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
router.get('/logout', logout.out);
router.get('/signup', signUpPage.sign);
router.post('/adduser', adduser.add);
router.post('/addfav', addFav.add);
router.get('/favirat', displyFav.displayFavBook);
router.use(client);
router.use(server);
module.exports = router;
