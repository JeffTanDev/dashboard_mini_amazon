import { useState } from "react";
import "./Searchbar.css";
import { useNavigate } from "react-router-dom";
function Searchbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query.trim()}`);
    }
  };
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search Mini Amazon"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-btn" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

export default Searchbar;
