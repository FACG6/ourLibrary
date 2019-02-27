const { readFileSync } = require('fs');
const { join } = require('path');
const connect = require('./db_connection');

const sql = readFileSync(join(__dirname, 'db_built.sql')).toString();

const runBuild = (file, cb) => {
  connect.query(sql, (err, res) => {
    if (err) return cb(err);
    return cb(null, res);
  });
};

// runBuild(() => console.log('database was rebuilt successfully'));

module.exports = runBuild;
