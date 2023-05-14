import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div class="job-listings-container">
      <h1>All Jobs:</h1>
      <ul class="job-listings">
        {auctions.map((auction) => (
          <li class="job-listing" key={auction._id}>
            <div class="job-title">{auction.jobTitle}</div>
            <div class="job-description">{auction.jobDescription}</div>
            <div class="job-location">Location: {auction.jobLocation}</div>
            <div class="job-amount">Base Amount: {auction.baseAmount}</div>
            <div class="job-exp">
              Experience Required: {auction.jobExpRequired}
            </div>
            <div class="job-availability">
              Availability: {auction.available}
            </div>
            <Link to={`/auctions/${auction._id}`} class="job-view-link">
              View
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllAuctions;
