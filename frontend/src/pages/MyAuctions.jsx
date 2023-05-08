import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const MyAuctions = () => {
  const { user } = useAuthContext();
  const [auctions, setAuctions] = useState([]);

  const email = user.email;

  useEffect(() => {
    const fetchAuctions = async () => {
      const res = await axios.get(`/api/auction/myauctions/${email}`);
      setAuctions(res.data);
    };
    fetchAuctions();
  }, [email]);

  return (
    <div>
      <h1>My Jobs:</h1>
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

export default MyAuctions;
