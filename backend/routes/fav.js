const express = require("express");
const {
  createFav,
  getAllMyFav,
  getFavByUserId,
  removeByFavId,
} = require("../controllers/fav");
const authentication = require("../middleware/authentication");
const favRouter = express.Router();

favRouter.post("/", authentication, createFav);
favRouter.get("/allfav", authentication, getAllMyFav);
favRouter.get("/", authentication, getFavByUserId);
favRouter.delete("/", removeByFavId);

module.exports = favRouter;
