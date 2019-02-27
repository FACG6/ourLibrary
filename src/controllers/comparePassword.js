const bcrypt = require('bcrypt');

const compare = passwords => new Promise((resolve, reject) => {
  if (!passwords[0]) {
    reject('email not found');
  }
  bcrypt.compare(passwords[1], passwords[0].password, (error, sucess) => {
    if (error) {
      reject(error);
    } else {
      resolve([sucess, passwords[0]]);
    }
  });
});
module.exports = compare;
