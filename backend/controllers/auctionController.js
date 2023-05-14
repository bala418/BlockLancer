const Auction = require("../models/auctionModel");
const User = require("../models/userModel");
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
    const mail = auction.mail;
    // console.log(mail);
    const user = await User.findOne({ email: mail });
    // console.log(user);
    auction.blockChainAddress = user.blockChainAddress;
    console.log(auction);

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

// get all auctions from 1 mail
const getMyAuctions = async (req, res) => {
  // get mail from url
  const email = req.params.email;
  console.log(email);

  try {
    const auctions = await Auction.find({ mail: email }).sort({
      createdAt: -1,
    });
    res.status(200).json(auctions);
  } catch (err) {
    res.json({ message: err });
  }
};

// get all bids from 1 mail
const getMyBids = async (req, res) => {
  // get mail from url
  const email = req.params.email;
  console.log(email);

  try {
    const auctions = await Auction.find({ "bidders.mail": email }).sort({
      createdAt: -1,
    });
    res.status(200).json(auctions);
  } catch (err) {
    res.json({ message: err });
  }
};

// accept a bid
const acceptBid = async (req, res) => {
  const auctionId = req.params.id;
  const bidId = req.params.bidid;

  console.log(auctionId, bidId);

  try {
    let auctions = await Auction.findOneAndUpdate(
      { _id: auctionId, "bidders._id": bidId },
      { $set: { "bidders.$.gotBid": "accepted" } },
      { new: true }
    );
    // update the auction with that id to be closed

    auctions = await Auction.findOneAndUpdate(
      { _id: auctionId },
      { $set: { available: "no" } },
      { new: true }
    );

    res.status(200).json(auctions);
  } catch (err) {
    res.json({ message: err });
  }
};

// update a workout
const closeAuction = async (req, res) => {
  const { id } = req.params;
  try {
    let auctions = await Auction.findOneAndUpdate(
      { _id: id },
      { $set: { available: "withdrawn" } },
      { new: true }
    );
    res.status(200).json(auctions);
  } catch (err) {
    res.json({ message: err });
  }
};
module.exports = {
  getAllAuctions,
  getAuction,
  createAuction,
  bidAuction,
  closeAuction,
  getMyAuctions,
  getMyBids,
  acceptBid,
};
