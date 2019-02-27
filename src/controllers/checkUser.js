const {
  sign,
} = require('jsonwebtoken');

const checkUser = require('./../database/queries/checkUser');
const compare = require('./comparePassword');
require('dotenv').config();

exports.checkUser = (req, res) => {
  const {
    emailVal,
    passwordValue,
  } = req.body;
  checkUser(emailVal)
    .then(rows => [rows.rows[0], passwordValue])
    .then(compare)
    .then((result) => {
      if (result[0]) {
        const payload = {
          name: result[1].name,
          id: result[1].user_id,
          role: 'user',
        };
        const jwt = sign(payload, process.env.SECRET);
        res.cookie('jwt', jwt, {
          maxAge: 1000 * 60 * 60 * 2,
        }, {
          httpOnly: true,
        });
        res.send(JSON.stringify({
          msg: 'done',
        }));
      } else {
        res.send(
          JSON.stringify({
            msg: 'Password error',
          }),
        );
      }
    })
    .catch((error) => {
      res.send(JSON.stringify({ msg: error }));
    });
};
