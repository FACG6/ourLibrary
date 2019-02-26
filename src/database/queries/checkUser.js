const connection = require('./../db_connection');

const checkUser = email => connection.query('select * from users where email = $1', [email]);
module.exports = checkUser;
