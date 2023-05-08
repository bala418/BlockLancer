const Auction = require("../models/auctionModel");
const mongoose = require("mongoose");

// get all auctions
const getAllAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find({}).sort({ createdAt: -1 });
    // get all workouts for a user
    // const user_id = req.user._id;
    // const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(auctions);
  } catch (err) {
    res.json({ message: err });
  }
};

// get a single auction
const getAuction = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const auction = await Auction.findById(id);
    if (!auction) {
      return res.status(404).json({ message: "Auction not found" });
    } else {
      res.status(200).json(auction);
    }
  } catch (err) {
    res.json({ message: err });
  }
};

// POST a new auction
const createAuction = async (req, res) => {
  const {
    mail,
    jobTitle,
    jobExpRequired,
    jobDescription,
    jobLocation,
    baseAmount,
    available,
  } = req.body;

  // Create a new auction with empty array of bidders
  const newAuction = new Auction({
    mail,
    jobTitle,
    jobExpRequired,
    jobDescription,
    jobLocation,
    baseAmount,
    available,
    bidders: [],
  });

  try {
    const auction = await newAuction.save();
    res.status(201).json(auction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// bid auction
const bidAuction = async (req, res) => {
  const auctionId = req.params.id;
  const { email, bidAmount } = req.body;
  console.log(email, bidAmount);

  try {
    const auction = await Auction.findById(auctionId);

    if (!auction) {
      return res.status(404).json({ message: "Auction not found" });
    }

    // if (auction.baseAmount >= bidAmount) {
    //   return res.status(400).json({ message: "Bid amount is too low" });
    // }

    const newBid = {
      mail: email,
      bidAmount,
      gotBid: "yes",
    };

    console.log(newBid);

    auction.bidders.push(newBid);

    console.log(auction);
    // auction.available = "no";
    await auction.save();

    res.status(200).json(auction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// update a workout
const closeAuction = async (req, res) => {
  res.status(200).json({ message: "Close successful" });
};
module.exports = {
  getAllAuctions,
  getAuction,
  createAuction,
  bidAuction,
  closeAuction,
};
