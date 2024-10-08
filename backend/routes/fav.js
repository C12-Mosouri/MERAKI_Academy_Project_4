const express = require("express");
const { createFav, getAllMyFav } = require("../controllers/fav");
const authentication = require("../middleware/authentication");
const favRouter = express.Router();

favRouter.post("/", authentication, createFav);
favRouter.get("/", authentication, getAllMyFav);
module.exports = favRouter;
