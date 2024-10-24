const express = require("express");
const db = require("./db/transactions.json");
const user = require("./db/user.json");
const authRoutes = require("./routes/authRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

const port = 3000;
const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

app.get("/health-check", (_, res) => {
  return res.sendStatus(200);
});

app.use("/list", transactionRoutes);

app.listen(port, () => {
  console.log(`[api] running on port \`${port}\``);
});
