import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="navbar-container">
      <h1>Dashboard</h1>
      <ul className="nav-links">
        <li>
          <Link to="/allAuctions">All Auctions</Link>
        </li>
        <li>
          <Link to="/createAuction">Create Auction</Link>
        </li>
        <li>
          <Link to="/myAuctions">My Auction</Link>
        </li>
        <li>
          <Link to="/myBids">My Bids</Link>
        </li>
        <li>
          <a href="http://127.0.0.1:3001/">Chat</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar2;
