import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Navbar() {
  const [username, setUsername] = useState("");
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
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-link">
        <a href="#">Location</a>
        <Searchbar />
        {username ? (
          <div> Hello {username} </div>
        ) : (
          <a href="/login">Account</a>
        )}
        <a href="#">Cart</a>
      </div>
    </nav>
  );
}

export default Navbar;
