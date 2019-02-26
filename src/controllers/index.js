const express = require('express');
const jwt = require('jsonwebtoken');
const SECRET = 'israa';

const router = express.Router();
const home = require('./home');
const getBooks = require('../database/queries/getBooks');

router.get('/', home.get);

module.exports = router;
