const CategoryModel = require("../models/category");
const SubCategoryModel = require("../models/subCategory");

const createCategory = (req, res) => {
  const { name, img } = req.body;
  console.log(name);
  const newCategory = new CategoryModel({
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
  const { name, img, categoryId } = req.body;
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

const getAllCategorys = (req, res) => {
  CategoryModel.find({})
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All Categorys Are Here",
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

const getAllSubCategorys = (req, res) => {
  SubCategoryModel.find({})
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All SubCategorys Are Here",
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
const updateCategoryById = (req, res) => {
  const id = req.params.id;
  const updateCategory = req.body;
  CategoryModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })
    .then((result) => {
      res.status(202).json({
        success: true,
        message: `Category Updated`,
        result: result,
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

const updateSubCategoryById = (req, res) => {
  const id = req.params.id;
  const updateSubCategory = req.body;
  SubCategoryModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })
    .then((result) => {
      res.status(202).json({
        success: true,
        message: `SubCategory Updated`,
        result: result,
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

const deleteCategoryById = (req, res) => {
  const id = req.params.id;
  CategoryModel.findByIdAndDelete(id)
    .then((result) => {
      res.status(202).json({
        success: true,
        message: `Category Deleted`,
        result: result,
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
const deleteSubCategoryById = (req, res) => {
  const id = req.params.id;
  SubCategoryModel.findByIdAndDelete(id)
    .then((result) => {
      res.status(202).json({
        success: true,
        message: `SubCategory Deleted`,
        result: result,
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

const getCategoryById = (req, res) => {
  const id = req.params.id;
  CategoryModel.findById({ _id: id }, req.body, { new: true })
    .then((result) => {
      res.status(202).json({
        success: true,
        message: `Category Found`,
        result: result,
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

const getSubCategoryById = (req, res) => {
  const id = req.params.id;
  SubCategoryModel.findById({ _id: id }, req.body, { new: true })
    .then((result) => {
      res.status(202).json({
        success: true,
        message: `Category Found`,
        result: result,
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

const getSubCategroyByCategoryId = (req, res) => {
  const id = req.params.id;
  SubCategoryModel.find({ categoryId: id }, req.body, { new: true })
    .then((result) => {
      res.status(202).json({
        success: true,
        message: `Category Found`,
        result: result,
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
module.exports = {
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
};
