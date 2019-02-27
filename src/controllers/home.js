require('dotenv').config();
const getBooks = require('../database/queries/getBooks');

exports.get = (req, res, next) => {
  getBooks().then((result) => {
    if (req.token) {
      res.render('home', {
        books: result.rows,
        authorize: true,
        name: req.token.name,
        fav: true,
      });
    } else {
      res.render('home', {
        books: result.rows,
        authorize: false,
      });
    }
  }).catch((error) => {
    next(error);
  });
};
