import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-link">
        <a href="#">Location</a>
        <Searchbar />
        <a href="/login">Account</a>
        <a href="#">Cart</a>
      </div>
    </nav>
  );
}

export default Navbar;
