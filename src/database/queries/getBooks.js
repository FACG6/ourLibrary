const connect = require('../db_connection');

const getBooks = (cb) => {
  connect.query('SELECT * from books', cb);
};

module.exports = getBooks;
