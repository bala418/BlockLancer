import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../components/Navbar2";

const About = () => {
  return (
    <div>
      <Navbar2 />
      <h1>Auction-Based Platform for Freelancers</h1>
      <p>
        Our auction-based platform is the perfect way for freelancers to get the
        work they need. With our platform, you can bid on projects from a
        variety of clients, and you'll only be paid if you win the bid. This
        means that you're always in control of your earnings, and you can set
        your own rates.
      </p>
      <p>Here are some of the benefits of using our platform:</p>
      <ul>
        <li>
          Get paid for your work: With our platform, you're only paid if you win
          the bid. This means that you're always in control of your earnings,
          and you can set your own rates.
        </li>
        <li>
          Work with a variety of clients: Our platform gives you access to a
          wide variety of clients, so you can find the work that you're
          interested in.
        </li>
        <li>
          Set your own hours: You can work whenever you want, and you can set
          your own hours. This means that you can balance your work with your
          other commitments.
        </li>
        <li>
          Get paid quickly: Once you win a bid, you'll be paid quickly. This
          means that you can get the money you need when you need it.
        </li>
      </ul>
      <p>Sign up today and start getting the work you need!</p>
      <h2>How to Win an Auction</h2>
      <p>
        If you're new to auction-based platforms, you may be wondering how to
        win an auction. Here are a few tips:
      </p>
      <ul>
        <li>
          Set a budget and stick to it. It's easy to get caught up in the
          excitement of an auction, but it's important to set a budget and stick
          to it. Otherwise, you could end up spending more than you can afford.
        </li>
        <li>
          Do your research. Before you bid on an auction, be sure to do your
          research and learn as much as you can about the project. This will
          help you make an informed decision about whether or not to bid.
        </li>
        <li>
          Be prepared to walk away. If you're not happy with the price of an
          auction, be prepared to walk away. There will always be other
          auctions, so don't feel pressured to bid on something that you're not
          happy with.
        </li>
      </ul>
      <p>
        Following these tips will help you increase your chances of winning an
        auction. So what are you waiting for? Sign up today and start bidding!
      </p>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default About;
