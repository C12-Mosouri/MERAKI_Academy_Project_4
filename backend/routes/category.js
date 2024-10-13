const express = require("express");

const categoryRouter = express.Router();
const {
  createCategory,
  createSubCategory,
  getAllCategorys,
  getAllSubCategorys,
  updateCategoryById,
  updateSubCategoryById,
  deleteCategoryById,
  deleteSubCategoryById,
  getCategoryById,
  getSubCategoryById,
  getSubCategroyByCategoryId,
} = require("../controllers/category");

categoryRouter.post("/", createCategory);
categoryRouter.post("/sub", createSubCategory);
categoryRouter.get("/", getAllCategorys);
categoryRouter.get("/sub", getAllSubCategorys);
categoryRouter.put("/:id", updateCategoryById);
categoryRouter.put("/sub/:id", updateSubCategoryById);
categoryRouter.delete("/:id", deleteCategoryById);
categoryRouter.delete("/:id", deleteSubCategoryById);
categoryRouter.get("/:id", getCategoryById);
categoryRouter.get("/sub/:id", getSubCategroyByCategoryId);
categoryRouter.get("/sub/:id/subcategoryid", getSubCategoryById);
/* categoryRouter.post("/",()=>{
    console.log("hello");
}) */
module.exports = categoryRouter;
