const express = require("express");
const { authenticate } = require("../controllers/authControllers");

const router = express.Router();

router.post("/", authenticate);

module.exports = router;
