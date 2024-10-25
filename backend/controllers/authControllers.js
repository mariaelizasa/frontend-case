const user = require("../db/user.json");
const jwt = require("jsonwebtoken");

const authenticate = (req, res) => {
  const { cpf, password } = req.body;

  if (cpf === user.cpf && password === user.password) {
    const token = jwt.sign({ id: cpf }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.status(200).json({ token });
  }
  return res.sendStatus(401);
};

module.exports = { authenticate };
