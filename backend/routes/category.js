const express = require("express");

const categoryRouter = express.Router();
const {
  createCategory,
  createSubCategory,
  getAllCategorys,
  getAllSubCategorys,
  updateCategoryById,
  updateSubCategoryById,
} = require("../controllers/category");

categoryRouter.post("/", createCategory);
categoryRouter.post("/sub", createSubCategory);
categoryRouter.get("/", getAllCategorys);
categoryRouter.get("/sub", getAllSubCategorys);
categoryRouter.put("/:id", updateCategoryById);
categoryRouter.put("/sub/:id", updateSubCategoryById);
/* categoryRouter.post("/",()=>{
    console.log("hello");
}) */
module.exports = categoryRouter;
