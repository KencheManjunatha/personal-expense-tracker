const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const transactionRoutes = require("./routes/transactions");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/transactions", transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});