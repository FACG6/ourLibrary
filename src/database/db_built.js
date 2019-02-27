const { readFileSync } = require('fs');
const { join } = require('path');
const connect = require('./db_connection');

const sql = readFileSync(join(__dirname, 'db_built.sql')).toString();

const runBuild = (cb) => {
  connect.query(sql, cb);
};

// runBuild(() => console.log('database was rebuilt successfully'));

module.exports = runBuild;
