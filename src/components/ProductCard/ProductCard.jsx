import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductCard.css";
import { CONTENT_SERVICE_URL } from "../../config";

function ProductCard({ product }) {
  const [productData, setProductData] = useState({
    title: "",
    price: 0,
    rating: 0,
    image: "https://via.placeholder.com/200",
    reviews: 0,
  });

  useEffect(() => {
    const getMainImg = async () => {
      const res = await axios.get(
        `${CONTENT_SERVICE_URL}/ProductService/images/${product.id}`
      );
      const mainImgUrl = `${CONTENT_SERVICE_URL}/ProductService/` + res.data[0];
      setProductData((prevProductData) => ({
        ...prevProductData,
        image: mainImgUrl,
      }));
    };
    getMainImg();
  }, [product]);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    navigate(`/${product.id}`);
  };

  useEffect(() => {
    setProductData({
      title: product.title,
      price: product.price,
      rating: product.rating,
      image: product.image,
      reviews: product.reviews,
    });
  }, [product]);

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={productData.image}
          alt={productData.title}
          onClick={handleClick}
        />
      </div>
      <div className="product-info">
        <h3 className="product-title" onClick={handleClick}>
          {productData.title}
        </h3>
        <div className="product-rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < productData.rating ? "star filled" : "star"}
            >
              ★
            </span>
          ))}
          <span className="reviews-count">({productData.reviews} reviews)</span>
        </div>
        <div className="product-price">
          <span className="price">${productData.price}</span>
          <span className="prime-badge">Prime</span>
        </div>
        <div className="delivery-info">
          <span className="delivery-date">
            estimated delivery date: 3-5 days
          </span>
          <span className="free-delivery">free delivery</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
