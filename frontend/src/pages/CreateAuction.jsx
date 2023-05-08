import React, { useState } from "react";
import axios from "axios";

const CreateAuction = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [baseAmount, setBaseAmount] = useState("");
  const [mail, setMail] = useState("");
  const [jobExpRequired, setJobExpRequired] = useState("");
  const [available, setAvailable] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auction/", {
        jobTitle,
        jobDescription,
        jobLocation,
        baseAmount,
        mail,
        jobExpRequired,
        available,
      });
      console.log(res.data);
      // Redirect to all auctions page

      window.location.href = "/";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Create Auction</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Job Description:
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Job Location:
          <input
            type="text"
            value={jobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
          />
        </label>
        <br />

        <label>
          Mail:
          <input
            type="text"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </label>
        <br />

        <label>
          Available:
          <input
            type="text"
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
          />
        </label>
        <br />

        <label>
          Job Experience Required:
          <input
            type="text"
            value={jobExpRequired}
            onChange={(e) => setJobExpRequired(e.target.value)}
          />
        </label>
        <br />

        <label>
          Base Amount:
          <input
            type="number"
            value={baseAmount}
            onChange={(e) => setBaseAmount(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create Auction</button>
      </form>
    </div>
  );
};

export default CreateAuction;
