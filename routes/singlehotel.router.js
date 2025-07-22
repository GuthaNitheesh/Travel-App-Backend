const express = require('express');
const router = express.Router();
const singlehotelHadler=require("../controllers/singleHotelController");
router.route("/:id")
    .get(singlehotelHadler);

module.exports = router;
