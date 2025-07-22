const express = require("express");
const Hotel = require("../model/hotel.model");
const hotels = require("../data/hotels");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await Hotel.deleteMany({});
    const hotelsInDB = await Hotel.insertMany(hotels.data);
    res.json(hotelsInDB);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "❌ Could not add data to DB" });
  }
});

module.exports = router;
