const express = require("express");

const categoryRouter = express.Router();
const {
  createCategory,
  createSubCategory,
} = require("../controllers/category");

categoryRouter.post("/", createCategory);
categoryRouter.post("/sub", createSubCategory);
/* categoryRouter.post("/",()=>{
    console.log("hello");
}) */
module.exports = categoryRouter;
