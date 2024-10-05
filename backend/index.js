const express = require("express");
const cors = require("cors");
const rolesRouter = require("./routes/roles");
require("dotenv").config();
require("./models/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/role", rolesRouter);

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
