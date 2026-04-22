const jwt = require("jsonwebtoken");

exports.googleCallback = (req, res) => {
  const token = jwt.sign({
    id: req.user.id,
    name: req.user.displayName,
    email: req.user.emails[0].value
  }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.redirect(`http://localhost:8080/dashboard.html?token=${token}`);
};

exports.protegido = (req, res) => {
  res.json({
    mensagem: "Área protegida MVC!",
    usuario: req.user
  });
};