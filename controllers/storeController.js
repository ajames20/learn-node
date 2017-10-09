exports.myMiddleWare = (req, res, next) => {
  req.name = 'andrew';
  next();
};

exports.homePage = (req, res) => {
  res.render('index');
};
