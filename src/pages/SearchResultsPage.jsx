import "./SearchResultsPage.css";
import { useParams } from "react-router-dom";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";
import ProductCard from "../components/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";

const CONTENT_SERVICE_URL = import.meta.env.VITE_CONTENT_SERVICE_URL;
function SearchResultsPage() {
  const { product } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [productList, setProductList] = useState([]);

  const handleFilterChange = (filters) => {
    const filtered = productList.filter((product) => {
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
    const getProduct = async () => {
      const response = await axios.get(
        `${CONTENT_SERVICE_URL}/ProductService/search?q=${product}`
      );
      setProductList(response.data);
      const prices = response.data.map((product) => product.price);
      setMaxPrice(Math.max(...prices));
      setFilteredProducts(response.data);
    };
    getProduct();
  }, [product]);

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
