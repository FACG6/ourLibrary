const addFavBook = require('./../database/queries/addFavBook');

exports.add = (req, res) => {
  const { bookId } = req.body;
  const { id } = req.token;
  addFavBook(bookId, id)
    .then(() => {
      res.send({ status: true });
    })
    .catch(() => {
      res.send({ status: false });
    });
};
