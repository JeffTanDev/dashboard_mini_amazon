import { useState } from "react";
import "./Searchbar.css";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query.trim()}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search Mini Amazon"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Searchbar;
