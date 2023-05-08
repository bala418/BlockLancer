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

  const viewAuction = () => {
    // go to the individual auction page
    // history.push(`/auctions/${id}`);
    // console.log(`Viewing auction with ID ${id}`);
  };

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
            <Link to={`/auctions/${auction._id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllAuctions;
