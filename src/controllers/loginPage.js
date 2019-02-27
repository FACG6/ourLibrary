exports.display = (req, res) => {
  if (req.token) {
    res.redirect('/');
  } else {
    res.render('login');
  }
};
