const jwt = require('jsonwebtoken');
const getBooks = require('../database/queries/getBooks');

const SECRET = 'israa';

exports.get = (req, res, next) => {
  const { cookies } = req;
  if (cookies.logged_in === true) {
    jwt.verify(cookies.token, SECRET, (err, result) => {
      if (err) {
        return res.send('Error in verification');
      }
      if (!result) {
        return res.send('Invalid Token');
      }
      const username = result.name;
      res.redirect(`/${username}`);
    });
  }
  getBooks((err, books) => {
    if (err) next(err);
    res.render('home', { books: books.rows });
  });
};
