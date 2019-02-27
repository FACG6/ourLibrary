exports.out = (req, res) => {
  res.clearCookie('jwt');
  res.redirect('/');
};
