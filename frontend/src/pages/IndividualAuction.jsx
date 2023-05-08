// get url params and display the data
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const IndividualAuction = () => {
  const [auction, setAuction] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchAuction = async () => {
      const res = await axios.get(`/api/auction/${id}`);
      setAuction(res.data);
    };
    fetchAuction();
  }, [id]);

  return (
    <div>
      <h1>{auction.jobTitle}</h1>
      <p>Job Description:{auction.jobDescription}</p>
      <p>Location: {auction.jobLocation}</p>
      <p>Base Amount: {auction.baseAmount}</p>
      {/* exp required and availability */}
      <p>Experience Required: {auction.jobExpRequired}</p>
      <p>Availability: {auction.available}</p>
      <p>Posted by: {auction.mail}</p>
    </div>
  );
};

export default IndividualAuction;
