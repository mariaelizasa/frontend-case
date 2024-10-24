const db = require("../db/transactions.json");

const listTransactions = (req, res) => {
  return res.json(db);
};

module.exports = { listTransactions };
