const express = require("express");
const { createFav } = require("../controllers/fav");
const favRouter = express.Router();

favRouter.post("/", createFav);
module.exports = favRouter;
