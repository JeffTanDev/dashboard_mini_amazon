import "./SearchResultsPage.css";
import { useParams } from "react-router-dom";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";
import ProductCard from "../components/ProductCard/ProductCard";

function SearchResultsPage() {
  const { product } = useParams();

  const mockProducts = [
    {
      id: 1,
      title: "2024 new laptop 15.6 inches",
      price: 4999,
      rating: 4,
      image: "https://via.placeholder.com/200",
      reviews: 128
    },
    {
      id: 2,
      title: "wireless bluetooth headphones active noise cancellation",
      price: 899,
      rating: 5,
      image: "https://via.placeholder.com/200",
      reviews: 256
    },
    {
      id: 3,
      title: "smart watch sports health monitoring",
      price: 1299,
      rating: 4,
      image: "https://via.placeholder.com/200",
      reviews: 89
    },
    {
      id: 4,
      title: "mechanical keyboard rgb backlit",
      price: 399,
      rating: 3,
      image: "https://via.placeholder.com/200",
      reviews: 45
    }
  ];

  return (
    <div className="search-results-page">
      <div className="search-header">
        <h2>search results: "{product}"</h2>
        <p>found {mockProducts.length} results</p>
      </div>
      <div className="search-content">
        <FilterSidebar />
        <div className="products-container">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResultsPage;
