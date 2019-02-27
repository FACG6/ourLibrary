const {
  verify,
} = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req, res, next) => {
  if (req.cookies) {
    if (req.cookies.jwt) {
      verify(req.cookies.jwt, process.env.SECRET, (error, infoJwt) => {
        if (error) {
          res.clearCookie('jwt');
        } else {
          req.token = infoJwt;
        }
      });
    }
  }
  next();
};
