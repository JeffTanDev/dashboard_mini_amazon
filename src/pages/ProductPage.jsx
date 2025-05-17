import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails/ProductDetails.jsx";
import ProductGallery from "../components/ProductGallery/ProductGallery.jsx";
import PurchaseBox from "../components/PurchaseBox/PurchaseBox.jsx";
import "./ProductPage.css";

const CONTENT_SERVICE_URL = import.meta.env.VITE_CONTENT_SERVICE_URL;
const mockProduct = {
  title: "Wireless Bluetooth Headphones",
  rating: 4,
  ratingCount: 1234,
  price: 99.99,
  features: [
    "High quality stereo sound",
    "20 hours battery life",
    "Comfortable ear cushions",
  ],
  colors: ["Black", "Blue", "White"],
  sizes: ["Small", "Medium", "Large"],
  description:
    "These wireless headphones are perfect for travel, work, and gaming.",
};

function ProductPage() {
  const [mockImages, setMockImages] = useState([]);
  useEffect(() => {
    const getCarouselImgs = async () => {
      const res = await fetch(
        `${CONTENT_SERVICE_URL}/ContentService/images/CarouselImgs`
      );
      const data = await res.json();
      const fullURL = data.map((url) => {
        return `${CONTENT_SERVICE_URL}/ContentService/${url}`;
      });
      setMockImages(fullURL);
    };
    getCarouselImgs();
  }, []);

  return (
    <div className="product-page">
      <ProductGallery images={mockImages} />
      <ProductDetails product={mockProduct} />
      <PurchaseBox product={mockProduct} />
    </div>
  );
}
export default ProductPage;
