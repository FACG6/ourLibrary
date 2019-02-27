const display = require('./../database/queries/displayFav');

exports.displayFavBook = (req, res, next) => {
  if (req.token) {
    display(req.token.id)
      .then((result) => {
        res.render('favirat', { name: req.token.name, result: result.rows });
      })
      .catch((error) => {
        next(error);
      });
  } else {
    res.redirect('/');
  }
};
