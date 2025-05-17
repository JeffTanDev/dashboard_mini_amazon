import { useState } from "react";
import "./PurchaseBox.css";

function PurchaseBox({ product }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="purchase-box">
      <h3 className="product-price">${product.price}</h3>
      <div className="quantity-selector">
        <h2>In Stock</h2>
        <label>
          Quantity:
          <select
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button className="add-to-cart">Add to Cart</button>
      <button className="buy-now">Buy Now</button>
    </div>
  );
}

export default PurchaseBox;
