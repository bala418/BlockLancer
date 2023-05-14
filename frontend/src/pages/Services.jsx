import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../components/Navbar2";

const Services = () => {
  return (
    <div>
      <Navbar2 />
      <h1>Our Services</h1>
      <p>
        We offer a wide range of services to help you find the perfect
        freelancer for your project. Whether you need help with design,
        development, marketing, or anything else, we have the freelancers who
        can get the job done.
      </p>
      <h2>How it works</h2>
      <p>
        Our platform is simple to use. Just create a project and specify your
        requirements. Once you've done that, we'll match you with qualified
        freelancers who are interested in your project. You can then review
        their profiles and portfolios and choose the freelancer who's right for
        you.
      </p>
      <h2>Benefits of using our platform</h2>
      <ul>
        <li>Access to a wide range of qualified freelancers</li>
        <li>Competitive pricing</li>
        <li>Easy-to-use platform</li>
        <li>Secure payments</li>
        <li>24/7 customer support</li>
      </ul>
      <h2>
        Sign up today and start finding the perfect freelancer for your project!
      </h2>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Services;
