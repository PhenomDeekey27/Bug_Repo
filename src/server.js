const express = require("express");
const orderRoutes = require("./routes/orderRoutes");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use("/api/orders", orderRoutes);
app.use(errorHandler);

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Order API listening on port 3000");
  });
}

module.exports = app;