const bcrypt = require('bcrypt');
const checkUser = require('./../database/queries/checkUser');
const {
  sign,
  verify,
} = require('jsonwebtoken');
require('dotenv').config();

const compare = (password, hashPassword) => new Promise((resolve, reject) => {
  bcrypt.compare(password, hashPassword, (error, sucess) => {
    if (error) {
      reject(error);
    } else {
      resolve(sucess);
    }
  });
});

exports.checkUser = (req, res) => {
  console.log(req.cookies);
  const {
    emailVal,
  } = req.body;
  const {
    passwordValue,
  } = req.body;
  checkUser(emailVal).then((rows) => {
    if (rows.rows[0]) {
      compare(passwordValue, rows.rows[0].password).then((result) => {
        if (result) {
          const payload = {
            name: rows.rows[0].name,
            id: rows.rows[0].id,
            role: 'user',
          };
          const jwt = sign(payload, process.env.SECRET);
          res.writeHead({
            'Set-cookie': [`jwt=${jwt};httpOnly;MaxAge=9000`],
          });
          res.send({
            msg: true,
          });
        } else {
          res.send(JSON.stringify({
            msg: 'Password error',
          }));
        }
      });
    } else {
      res.send(JSON.stringify({
        msg: 'no email',
      }));
    }
  }).catch((error) => {
    console.log(error.message);
  })
};