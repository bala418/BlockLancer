const express = require("express");
const router = express.Router();
const {
  createAuction,
  getAllAuctions,
  getAuction,
  bidAuction,
  closeAuction,
  getMyAuctions,
  getMyBids,
  acceptBid,
} = require("../controllers/auctionController");
// const requireAuth = require("../middleware/requireAuth");

// router.use(requireAuth);

// get auctions
router.get("/", getAllAuctions);

// accept a bid
router.patch("/accept/:id/:bidid", acceptBid);

// view my auctions
router.get("/myauctions/:email", getMyAuctions);

// view my bids
router.get("/mybids/:email", getMyBids);

// get a single auction
router.get("/:id", getAuction);

// POST a new auction
router.post("/", createAuction);

// bid for an auction
router.patch("/bid/:id", bidAuction);

// close an auction
router.patch("/close/:id", closeAuction);

module.exports = router;
