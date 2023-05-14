import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  const { user } = useAuthContext();
  console.log("Auth context ", useAuthContext());
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>BlockLancer</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span className="bca">{user.blockChainAddress}</span>
              {/* leave some space */}
              <span> </span>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log Out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
