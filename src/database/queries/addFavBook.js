const connection = require('./../db_connection');

const addFavBook = (bookId, userId) => connection.query('insert into user_books (user_id,book_id) values ($1,$2) returning *', [userId, bookId]);
module.exports = addFavBook;
