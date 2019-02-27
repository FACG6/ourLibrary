const connect = require('./../db_connection');

const displayFav = userId => connect.query('SELECT books.name, books.url  FROM user_books inner join books on books.book_id = user_books.book_id inner join users on users.user_id = user_books.user_id where users.user_id = $1', [userId]);
module.exports = displayFav;
