const express = require("express");
const cors = require("cors");
const rolesRouter = require("./routes/roles");
const usersRouter = require("./routes/users");
const categoryRouter = require("./routes/category");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const favRouter = require("./routes/fav");
const orderRouter = require("./routes/order");
require("dotenv").config();
require("./models/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/role", rolesRouter);
app.use("/users", usersRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/fav", favRouter);
app.use("/order", orderRouter);
// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
