const express = require("express");
const { listTransactions } = require("../controllers/transactionController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", verifyToken, listTransactions);

module.exports = router;
