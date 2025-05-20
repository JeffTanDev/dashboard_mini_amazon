import "./SearchResultsPage.css";
import { useParams } from "react-router-dom";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";
import ProductCard from "../components/ProductCard/ProductCard";
import { useState, useEffect } from "react";

function SearchResultsPage() {
  const { product } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(10000);

  const mockProducts = [
    {
      id: 1,
      title: "2024 new laptop 15.6 inches",
      price: 4999,
      rating: 4,
      image: "https://via.placeholder.com/200",
      reviews: 128,
      delivery: {
        freeDelivery: true,
        nextDayDelivery: true,
      },
    },
    {
      id: 2,
      title: "wireless bluetooth headphones active noise cancellation",
      price: 899,
      rating: 5,
      image: "https://via.placeholder.com/200",
      reviews: 256,
      delivery: {
        freeDelivery: true,
        nextDayDelivery: false,
      },
    },
    {
      id: 3,
      title: "smart watch sports health monitoring",
      price: 1299,
      rating: 4,
      image: "https://via.placeholder.com/200",
      reviews: 89,
      delivery: {
        freeDelivery: false,
        nextDayDelivery: true,
      },
    },
    {
      id: 4,
      title: "mechanical keyboard rgb backlit",
      price: 399,
      rating: 3,
      image: "https://via.placeholder.com/200",
      reviews: 45,
      delivery: {
        freeDelivery: true,
        nextDayDelivery: false,
      },
    },
  ];

  const handleFilterChange = (filters) => {
    const filtered = mockProducts.filter((product) => {
      const priceInRange =
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max;

      const ratingMatch =
        filters.rating === 0 || product.rating >= filters.rating;

      const deliveryMatch =
        (!filters.delivery.freeDelivery || product.delivery.freeDelivery) &&
        (!filters.delivery.nextDayDelivery || product.delivery.nextDayDelivery);

      return priceInRange && ratingMatch && deliveryMatch;
    });

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const prices = mockProducts.map((product) => product.price);
    setMaxPrice(Math.max(...prices));
    setFilteredProducts(mockProducts);
  }, []);

  return (
    <div className="search-results-page">
      <div className="search-header">
        <h2>Search results: "{product}"</h2>
        <p>found {filteredProducts.length} results</p>
      </div>
      <div className="search-content">
        <FilterSidebar
          onFilterChange={handleFilterChange}
          maxPrice={maxPrice}
        />
        <div className="products-container">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResultsPage;
