import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const IndividualAuction = () => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const [auction, setAuction] = useState({});
  const [canBid, setCanBid] = useState(false);
  const [bidAmount, setBidAmount] = useState(0);

  useEffect(() => {
    const fetchAuction = async () => {
      const res = await axios.get(`/api/auction/${id}`);
      setAuction(res.data);
    };
    fetchAuction();
  }, [id]);

  useEffect(() => {
    const checkCanBid = () => {
      if (auction.mail === user.email) {
        setCanBid(false);
      }
      if (auction.bidders) {
        auction.bidders.forEach((bid) => {
          if (bid.mail === user.email) {
            setCanBid(false);
          }
        });
      }
      if (auction.mail !== user.email) {
        setCanBid(true);
      }
    };
    checkCanBid();
  }, [auction, user.email]);

  console.log("This is the auction");
  console.log(auction);
  console.log(user.email);
  console.log(auction.mail);
  console.log(auction.bidders);

  const handleBid = async () => {
    // handle bid submission
    const bid = {
      bidAmount: bidAmount,
      email: user.email,
    };
    const res = await axios.patch(`/api/auction/bid/${id}/`, bid);
    setAuction(res.data);

    console.log("bid submitted");
  };

  return (
    <div>
      <h1>{auction.jobTitle}</h1>
      <h3>{user.email}</h3>
      <p>Job Description:{auction.jobDescription}</p>
      <p>Location: {auction.jobLocation}</p>
      <p>Base Amount: {auction.baseAmount}</p>
      {/* exp required and availability */}
      <p>Experience Required: {auction.jobExpRequired}</p>
      <p>Availability: {auction.available}</p>
      <p>Posted by: {auction.mail}</p>
      <p>Posted on: {auction.createdAt}</p>
      <p>Updated on: {auction.updatedAt}</p>

      {user.email === auction.mail && (
        <button onClick={() => console.log("close auction")}>Close</button>
      )}

      {canBid && (
        <div>
          <button onClick={handleBid}>Bid</button>
          <input
            type="number"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
          />
        </div>
      )}

      <h2>Bids</h2>
      {auction.bidders &&
        auction.bidders.map((bid) => (
          <div key={bid._id}>
            <p>Amount: {bid.bidAmount}</p>
            <p>Bidded by: {bid.mail}</p>
            <p>Bid Status: {bid.gotBid}</p>
          </div>
        ))}
    </div>
  );
};

export default IndividualAuction;
