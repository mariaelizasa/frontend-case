const user = require("../db/user.json");

const authenticate = (req, res) => {
  const { cpf, password } = req.body;

  if (cpf === user.cpf && password === user.password) {
    return res.status(200).json({ token: user.token });
  }
  return res.sendStatus(401);
};

module.exports = { authenticate };
