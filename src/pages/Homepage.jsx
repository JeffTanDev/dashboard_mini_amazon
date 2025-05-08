import "./Homepage.css";
import Carousel from "../components/Carousel/Carousel";
import ShowCase1 from "../components/ProductShowCases/ShowCase1/ShowCase1.jsx";
import ShowCase2 from "../components/ProductShowCases/ShowCase2/ShowCase2.jsx";

function Homepage() {
  const imgs = [
    "http://localhost:8000/images/product1.jpg",
    "http://localhost:8000/images/product2.jpg",
    "http://localhost:8000/images/product3.jpg",
    "http://localhost:8000/images/product4.jpg",
  ];

  return (
    <div className="homepage">
      <div className="hero-section">
        <Carousel images={imgs} />
      </div>
      <div className="empty"></div>
      <div className="showcase-overlay">
        <ShowCase1 />
        <ShowCase1 />
        <ShowCase2 />
        <ShowCase2 />
        <ShowCase1 />
        <ShowCase2 />
      </div>
    </div>
  );
}

export default Homepage;
