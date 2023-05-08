// get url params and display the data
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const IndividualAuction = () => {
  const { user } = useAuthContext();
  const [auction, setAuction] = useState({});
  const { id } = useParams();
  console.log("user:", user);
  useEffect(() => {
    const fetchAuction = async () => {
      const res = await axios.get(`/api/auction/${id}`);
      setAuction(res.data);
    };
    fetchAuction();
  }, [id]);

  // if user.email === auction.mail, then show the close button
  // if user.email !== auction.mail, then show the bid button

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

      {/* if user.email === auction.mail, then show the close button */}
      {/* if user.email !== auction.mail, then show the bid button */}
      {user.email === auction.mail && (
        <button onClick={() => console.log("close auction")}>Close</button>
      )}
      {user.email !== auction.mail && (
        <button onClick={() => console.log("bid on auction")}>Bid</button>
      )}
    </div>
  );
};

export default IndividualAuction;
