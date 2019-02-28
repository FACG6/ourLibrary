exports.sign = (req, res) => {
  if (req.token) {
    res.redirect('/');
  } else {
    res.render('signup', {
      signup: true,
    });
  }
};
