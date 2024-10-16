const express = require("express");
const {
  createFav,
  getAllMyFav,
  removeFromFavByProductId,
  getFavByUserId,
} = require("../controllers/fav");
const authentication = require("../middleware/authentication");
const favRouter = express.Router();

favRouter.post("/", authentication, createFav);
favRouter.get("/myfav", authentication, getAllMyFav);
favRouter.get("/", authentication, getFavByUserId);
favRouter.delete("/",  removeFromFavByProductId);

module.exports = favRouter;
