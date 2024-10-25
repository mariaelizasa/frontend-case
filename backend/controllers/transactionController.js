const db = require("../db/transactions.json");

const listTransactions = (_, res) => {
  return res.json(db);
};

module.exports = { listTransactions };
