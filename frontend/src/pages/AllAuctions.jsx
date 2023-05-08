import React, { useState, useEffect } from "react";
import axios from "axios";

const AllAuctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      const res = await axios.get("/api/auction/");
      setAuctions(res.data);
    };
    fetchAuctions();
  }, []);

  return (
    <div>
      <h1>All Jobs:</h1>
      <ul>
        {auctions.map((auction) => (
          <li key={auction._id}>
            <h2>{auction.jobTitle}</h2>
            <p>{auction.jobDescription}</p>
            <p>Location: {auction.jobLocation}</p>
            <p>Base Amount: {auction.baseAmount}</p>
            {/* exp required and availability */}
            <p>Experience Required: {auction.jobExpRequired}</p>
            <p>Availability: {auction.available}</p>
            <p>Posted By: {auction.mail}</p>
            <button>Bid</button>
            <input type="number" name="" id="" />
            <button>View Bids</button>
            <button>Close</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllAuctions;
