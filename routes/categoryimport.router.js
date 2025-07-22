const express = require("express");
const Category = require("../model/category.model");
const categories= require("../data/categories");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await Category.deleteMany({});
    const categoriesInDB = await Category.insertMany(categories.data);
    res.json(categoriesInDB);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "❌ Could not add categories to DB" });
  }
});

module.exports = router;
