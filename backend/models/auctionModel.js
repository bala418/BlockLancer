const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema(
  {
    mail: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    jobExpRequired: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    jobLocation: {
      type: String,
      required: true,
    },
    baseAmount: {
      type: Number,
      required: true,
    },
    available: {
      type: String,
      required: true,
    },
    bidders: [
      {
        mail: {
          type: String,
        },
        bidAmount: {
          type: Number,
        },
        gotBid: {
          type: String,
        },
      },
    ],
    blockChainAddress:{
      type: String,
    }
  },
  { timestamps: true }
);

const Auction = mongoose.model("Auction", auctionSchema);

module.exports = Auction;
