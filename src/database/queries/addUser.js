const connection = require('./../db_connection');

const addUser = userInfo => {
  return connection.query('insert into users (name, email, password) values ($1, $2, $3) RETURNING *', [userInfo.name, userInfo.email, userInfo.password]);
}

module.exports = addUser;