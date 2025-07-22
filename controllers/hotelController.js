
const Hotel = require("../model/hotel.model");


const getAllHotelHandler=async (req, res) => {
       const hotelCategory=req.query.category;
    try {
       let hotels;
       if(hotelCategory){

               hotels = await Hotel.find({category:hotelCategory});
       }else{
              hotels=await Hotel.find({});
       }
      hotels?res.json(hotels):res.status(404).json({message:"No Data Found"});
     
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error while fetching hotels" });
    }
  }


  module.exports=getAllHotelHandler;