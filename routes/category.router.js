const express = require("express");
const { route } = require("./dataimport.router");
const router = express.Router();
const categoryHandler=require("../controllers/categoryController");
router.route("/")
    .get(categoryHandler);


module.exports = router;