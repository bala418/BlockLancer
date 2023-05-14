import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../components/Navbar2";

const Contact = () => {
  return (
    <div>
      <Navbar2 />
      <h1>Contact Us</h1>
      <p>
        Thank you for your interest in our freelancing platform. If you have any
        questions, comments, or concerns, please don't hesitate to contact us.
      </p>
      <h2>Founder Location</h2>
      <p>Our founder is based in: Chennai, India</p>
      <h2>Phone</h2>
      <p>You can reach us by phone at:</p>
      <p>9962699970</p>
      <h2>Email</h2>
      <p>You can also contact us by email at:</p>
      <p>balavtwo@gmail.com</p>
      <h2>Social Media</h2>
      <p>Follow us on social media for updates and news:</p>
      <ul>
        <li>
          <a href="www.facebook.com">Facebook</a>
        </li>
        <li>
          <a href="www.twitter.com">Twitter</a>
        </li>
        <li>
          <a href="www.linkedin.com">LinkedIn</a>
        </li>
        <li>
          <a href="www.instagram.com">Instagram</a>
        </li>
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Contact;
