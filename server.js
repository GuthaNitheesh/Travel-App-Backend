const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");
const connectDB = require("./config/dbconfig");
const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router");
const singleHotelRouter=require("./routes/singlehotel.router");
const authRouter=require("./routes/auth.router");
const wishlistRouter=require("./routes/wishlist.router");
const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");

const app = express();
app.use(express.json());

const cors = require('cors');

app.use(cors({
  origin: "https://hotel-booking-client.vercel.app", // replace with your Vercel frontend domain
  credentials: true,
}));



// Connect to DB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello Geeks");
});

app.use("/api/categorydata",categoryDataAddedToDBRouter);
app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/category",categoryRouter);
app.use("/api/hotels",singleHotelRouter);
app.use("/api/auth",authRouter);
app.use("/api/wishlist",wishlistRouter);

mongoose.connection.once("open", () => {
  console.log("✅ Connected to DB");
  app.listen(1010, () => {
    console.log("🚀 Server running on port 1010");
  });
});
