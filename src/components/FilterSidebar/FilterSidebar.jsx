import "./FilterSidebar.css";
import { useEffect, useState } from "react";
import { Range } from "react-range";

function FilterSidebar({ onFilterChange, maxPrice }) {
  const [filters, setFilters] = useState({
    priceRange: { min: 0, max: 1 },
    rating: 0,
    delivery: {
      freeDelivery: false,
      nextDayDelivery: false,
    },
  });

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: {
        min: 0,
        max: maxPrice,
      },
    }));
  }, [maxPrice]);

  const handlePriceChange = (values) => {
    const newFilters = {
      ...filters,
      priceRange: {
        min: values[0],
        max: values[1],
      },
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleInputChange = (type, value) => {
    let numValue = Number(value);

    if (numValue < 0) numValue = 0;
    if (numValue > maxPrice) numValue = maxPrice;

    if (type === "min" && numValue > filters.priceRange.max) {
      numValue = filters.priceRange.max;
    }

    if (type === "max" && numValue < filters.priceRange.min) {
      numValue = filters.priceRange.min;
    }

    const newValues =
      type === "min"
        ? [numValue, filters.priceRange.max]
        : [filters.priceRange.min, numValue];

    handlePriceChange(newValues);
  };

  const handleRatingChange = (rating) => {
    const newFilters = {
      ...filters,
      rating: filters.rating === rating ? 0 : rating,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleDeliveryChange = (type) => {
    const newFilters = {
      ...filters,
      delivery: {
        ...filters.delivery,
        [type]: !filters.delivery[type],
      },
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="filter-sidebar">
      <h3>filter conditions</h3>

      <div className="filter-section">
        <h4>price range</h4>
        <div className="price-range">
          <Range
            step={1}
            min={0}
            max={maxPrice}
            values={[filters.priceRange.min, filters.priceRange.max]}
            onChange={handlePriceChange}
            renderTrack={({ props, children }) => (
              <div
                key="track"
                className="range-track"
                style={{
                  ...props.style,
                  height: "6px",
                  width: "100%",
                  backgroundColor: "#ddd",
                }}
                {...props}
              >
                {children}
              </div>
            )}
            renderThumb={({ props, index }) => {
              const { key, ...otherProps } = props;
              return (
                <div
                  key={`thumb-${index}`}
                  className="range-thumb"
                  style={{
                    ...otherProps.style,
                    height: "20px",
                    width: "20px",
                    backgroundColor: "#0066c0",
                    borderRadius: "50%",
                  }}
                  {...otherProps}
                />
              );
            }}
          />
          <div className="price-inputs">
            <input
              type="number"
              placeholder="lowest"
              value={filters.priceRange.min}
              onChange={(e) => handleInputChange("min", e.target.value)}
              min={0}
              max={maxPrice}
            />
            <span>-</span>
            <input
              type="number"
              placeholder="highest"
              value={filters.priceRange.max}
              onChange={(e) => handleInputChange("max", e.target.value)}
              min={0}
              max={maxPrice}
            />
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h4>rating</h4>
        <div className="rating-options">
          <label>
            <input
              type="checkbox"
              checked={filters.rating === 4}
              onChange={() => handleRatingChange(4)}
            />{" "}
            4 stars and above
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.rating === 3}
              onChange={() => handleRatingChange(3)}
            />{" "}
            3 stars and above
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.rating === 2}
              onChange={() => handleRatingChange(2)}
            />{" "}
            2 stars and above
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h4>delivery options</h4>
        <div className="delivery-options">
          <label>
            <input
              type="checkbox"
              checked={filters.delivery.freeDelivery}
              onChange={() => handleDeliveryChange("freeDelivery")}
            />{" "}
            free delivery
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.delivery.nextDayDelivery}
              onChange={() => handleDeliveryChange("nextDayDelivery")}
            />{" "}
            next day delivery
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;
