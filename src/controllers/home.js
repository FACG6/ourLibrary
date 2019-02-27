require('dotenv').config();
const jwt = require('jsonwebtoken');
const getBooks = require('../database/queries/getBooks');
const SECRET = process.env.SECRET;

exports.get = (req, res, next) => {
  getBooks((err, books) => {
    if (err) next(err);
    res.render('home', { books: books.rows, authorize: true });
  });
};
