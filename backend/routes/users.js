const express = require("express");
const {
  register,
  login,
  getUserInfo,
  getUserById,
} = require("../controllers/users");
const authentication = require("../middleware/authentication");

const usersRouter = express.Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.get("/", getUserInfo);
usersRouter.get("/:id", authentication, getUserById);

module.exports = usersRouter;
