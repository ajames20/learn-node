const passport = require('passport');

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failedFlash: 'Failed Login!',
  successRedirect: '/',
  successFlash: 'You are now Logged in.'
});

exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'You are now logged out 👋🏼');
  res.redirect('/');
};
