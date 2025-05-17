import { useState } from "react";
import "./ProductDetails.css";

function ProductDetails({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  return (
    <div className="product-detail">
      <h1 className="product-title">{product.title}</h1>
      <div className="product-rating">
        {"★".repeat(product.rating)}
        {"☆".repeat(5 - product.rating)}
        <span className="rating-count">{product.ratingCount} ratings</span>
      </div>

      <div className="product-price">${product.price.toFixed(2)}</div>

      <div className="product-variants">
        <label>
          Color:
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            {product.colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </label>

        <label>
          Size:
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="product-description">
        <h3>Product details:</h3>
        <p>{product.description}</p>
      </div>

      <ul className="product-features">
        <h3>About this item</h3>
        {product.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductDetails;
