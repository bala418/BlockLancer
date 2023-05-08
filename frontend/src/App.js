import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AllAuctions from "./pages/AllAuctions";
import CreateAuction from "./pages/CreateAuction";
import IndividualAuction from "./pages/IndividualAuction";
import MyAuctions from "./pages/MyAuctions";
import MyBids from "./pages/MyBids";

// components
import Navbar from "./components/Navbar";

function App() {
  const { user } = useAuthContext();
  console.log(user);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="login" />}
            ></Route>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            ></Route>

            <Route path="/allAuctions" element={<AllAuctions />}></Route>
            <Route path="/createAuction" element={<CreateAuction />}></Route>
            <Route path="/auctions/:id" element={<IndividualAuction />}></Route>
            <Route path="/myAuctions" element={<MyAuctions />}></Route>
            <Route path="/myBids" element={<MyBids />}></Route>

            <Route path="*" element={<h1>Invalid Route</h1>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
