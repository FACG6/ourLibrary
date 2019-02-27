const connect = require('../db_connection');

const getBooks = () => connect.query('SELECT * from books');

module.exports = getBooks;
