const express = require("express");
const { register, login, getUserInfo } = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.get("/", getUserInfo);

module.exports = usersRouter;
