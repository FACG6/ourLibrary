const { Pool } = require('pg');
const url = require('url');
require('dotenv').config();

let DB_URL = process.env.DB_URL_local;
if (process.env.NODE_ENV === 'dev') {
  DB_URL = process.env.DB_URL_local;
} else if (process.env.NODE_ENV === 'pro') {
  DB_URL = process.env.DATABASE_URL;
}
const params = url.parse(DB_URL);
const [username, password] = params.auth.split(':');

const option = {
  host: params.hostname,
  port: params.port,
  user: username,
  password,
  database: params.path.split('/')[1],
  max: 2,
  ssl: params.hostname !== 'localhost',
};

module.exports = new Pool(option);
