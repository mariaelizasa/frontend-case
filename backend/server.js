const express = require("express");
const authRoutes = require("./routes/authRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const cors = require("cors")
require('dotenv').config();

const port = process.env.PORT

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/health-check", (_, res) => {
  return res.sendStatus(200);
});

app.use("/transactions", transactionRoutes);

app.listen(port, () => {
  console.log(`[api] running on port \`${port}\``);
});
