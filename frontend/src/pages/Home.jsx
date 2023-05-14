import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../components/Navbar2";

const Home = () => {
  return (
    <div>
      <Navbar2 />
      <div className="homepage-container">
        <h1>Welcome to BlockLancer!</h1>
        <div className="card-grid">
          <div className="card">
            <h2>About</h2>
            <p>Learn more about our platform and our mission.</p>
            <Link to="/about">Read More</Link>
          </div>
          <div className="card">
            <h2>Services</h2>
            <p>
              Discover the services that we offer to freelancers and employers.
            </p>
            <Link to="/services">Read More</Link>
          </div>
          <div className="card">
            <h2>Blog</h2>
            <p>Stay up-to-date with our latest news and insights.</p>
            <Link to="/blogs">Read More</Link>
          </div>
          <div className="card">
            <h2>Contact</h2>
            <p>Get in touch with our team for any questions or inquiries.</p>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
