const user = require("../db/user.json");

const verifyToken = (req, res, next) => {
  const token = req.headers["token-access"];
  if (!token || token !== user.token) {
    return res.sendStatus(401);
  }
  next();
};

module.exports = verifyToken;
