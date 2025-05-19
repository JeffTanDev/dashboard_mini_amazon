import "./FilterSidebar.css";

function FilterSidebar() {
  return (
    <div className="filter-sidebar">
      <h3>filter conditions</h3>
      
      <div className="filter-section">
        <h4>price range</h4>
        <div className="price-range">
          <input type="range" min="0" max="1000" />
          <div className="price-inputs">
            <input type="number" placeholder="lowest" />
            <span>-</span>
            <input type="number" placeholder="highest" />
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h4>rating</h4>
        <div className="rating-options">
          <label>
            <input type="checkbox" /> 4 stars and above
          </label>
          <label>
            <input type="checkbox" /> 3 stars and above
          </label>
          <label>
            <input type="checkbox" /> 2 stars and above
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h4>delivery options</h4>
        <div className="delivery-options">
          <label>
            <input type="checkbox" /> free delivery
          </label>
          <label>
            <input type="checkbox" /> next day delivery
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar; 