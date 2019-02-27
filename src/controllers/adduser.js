const bcrypt = require('bcrypt');
const addUser = require('./../database/queries/addUser');

const hashPassWord = password => new Promise((resolve, reject) => {
  bcrypt.hash(password, 10, (err, result) => {
    if (err) reject(err);
    else resolve(result);
  });
});

exports.add = (req, res) => {
  hashPassWord(req.body.password)
    .then((hashedPass) => req.body.password = hashedPass)
    .then(() => {
      return addUser(req.body);
    }).then(()=> {
      res.send({status: true});
    })
    .catch((err) => {
      console.log(err);
    });
};
