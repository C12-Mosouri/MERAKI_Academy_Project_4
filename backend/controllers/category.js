const CategoryModel = require("../models/category");
const SubCategoryModel = require("../models/subCategory");

const createCategory = (req, res) => {
  const { name, img } = req.body;
  console.log(name);
  newCategory = new CategoryModel({
    name,
    img,
  });
  newCategory
    .save()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Category Added Successfully",
        Category: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};
const createSubCategory = (req, res) => {
  const { name, img, id } = req.body;
  console.log(name);
  newSubCategory = new SubCategoryModel({
    name,
    img,
    categoryId,
  });
  newSubCategory
    .save()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "SubCategory Added Successfully",
        Category: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};

module.exports = { createCategory, createSubCategory };
