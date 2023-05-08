import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to="/allAuctions">All Auctions</Link>
        </li>
        <li>
          <Link to="/createAuction">Create Auction</Link>
        </li>
        <li>
          <Link to="/individualAuction">Individual Auction</Link>
        </li>
        <li>
          <Link to="/myAuctions">My Auction</Link>
        </li>
        <li>
          <Link to="/myBids">My Bids</Link>
        </li>
        {/* link to the chat app */}
        <li>
          <a href="https://www.google.com">Google / The Chat App</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar2;
