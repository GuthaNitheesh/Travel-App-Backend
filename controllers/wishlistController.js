const express = require("express");
const Wishlist = require("../model/wishlist.model");

const createWishlistHandler=async (req, res) => {
        const newWishlist = new Wishlist(req.body);
        try {
            const savedWishlist = await newWishlist.save();
            res.status(201).json(savedWishlist); // ✅ Send success response
        } catch (err) {
            res.status(500).json({
                message: "Internal server error"
            });
        }
    }

const deleteWishlistHandler=async (req, res) => {
    try {
      const deleted = await Wishlist.findByIdAndDelete(req.params.id);

      if (!deleted) {
        return res.status(404).json({ message: "Hotel not found in wishlist" });
      }

      res.json({ message: "Hotel deleted from wishlist" });
    } catch (err) {
      res.status(500).json({ message: "Could not delete hotel from wishlist" });
    }
  }


  const  getWishlistHandler=async (req, res) => {
        try {
    const wishlist=await Wishlist.find({});
    wishlist?res.json(wishlist):res.json({message:"no item found"})
        } catch (err) {
            res.status(500).json({ message: "Could not delete hotel from wishlist" })
        }
    }
















    module.exports={createWishlistHandler,deleteWishlistHandler,getWishlistHandler};