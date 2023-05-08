const express = require("express");
const router = express.Router();
const {
  createAuction,
  getAllAuctions,
  getAuction,
  bidAuction,
  closeAuction,
} = require("../controllers/auctionController");
// const requireAuth = require("../middleware/requireAuth");

// router.use(requireAuth);

// get auctions
router.get("/", getAllAuctions);

// get a single auction
router.get("/:id", getAuction);

// POST a new auction
router.post("/", createAuction);

// bid for an auction
router.patch("/bid/:id", bidAuction);

// close an auction
router.patch("/close/:id", closeAuction);

module.exports = router;
