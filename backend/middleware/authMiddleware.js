const user = require("../db/user.json");

const verifyToken = (req, res, next) => {
  const token = req.headers.token;
  console.log("Token recebido:", token); // Logando o token recebido
  console.log("Token esperado:", user.token); // Logando o token esperado
  if (!token || token !== user.token) {
    return res.sendStatus(401);
  }
  next();
};

module.exports = verifyToken;
