import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../components/Navbar2";

const Home = () => {
  return (
    <div>
      <h1>Welcome to BlockLancer!</h1>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Navbar2 />
    </div>
  );
};

export default Home;
