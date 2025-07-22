const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    console.log("🌐 Connecting to DB...");
    await mongoose.connect(process.env.DATABASE_URI);
    
  } catch (err) {
    console.log("❌ DB Connection Error:", err.message);
  }
};

module.exports = connectDB;
