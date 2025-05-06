import "./Searchbar.css";
function Searchbar() {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search Mini Amazon" />
      <button className="search-btn">Search</button>
    </div>
  );
}

export default Searchbar;
