import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [username, setUsername] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const getUsername = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/UserService/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsername(response.data.username);
      } catch (error) {
        setUsername("");
        console.log("Error Message:", error.response.data.message);
      }
    };
    if (token) getUsername();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setUsername("");
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-link">
        <a href="#">Location</a>
        <Searchbar />
        {username ? (
          <div
            className="user-menu"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="username">
              <span className="hello-text">Hello，{username}</span>
              <span className="account-text">Account & List ▾</span>
            </div>
            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-header">
                  <button
                    className="signin-button"
                    onClick={() => navigate("/profile")}
                  >
                    Manage My Account
                  </button>
                </div>
                <div className="dropdown-content">
                  <div className="dropdown-section">
                    <h4>Account</h4>
                    <ul>
                      <li onClick={() => navigate("/profile")}>Account Info</li>
                      <li onClick={() => navigate("/orders")}>Orders</li>
                      <li onClick={() => navigate("/address")}>Address</li>
                      <li onClick={() => navigate("/payments")}>Payment</li>
                    </ul>
                  </div>
                  <div className="dropdown-section">
                    <h4>Setting</h4>
                    <ul>
                      <li onClick={() => navigate("/notifications")}>
                        Notify Setting
                      </li>
                      <li onClick={() => navigate("/security")}>
                        Data Security
                      </li>
                      <li onClick={handleLogOut}>Log Out</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <a href="/login">Account</a>
        )}
        <a href="#">Cart</a>
      </div>
    </nav>
  );
}

export default Navbar;
