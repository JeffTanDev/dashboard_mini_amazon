import { useEffect, useState } from "react";
import "./PurchaseBox.css";
import { addProduct } from "../../Redux/cartSlice.js";
import { useDispatch } from "react-redux";

function PurchaseBox({ productInfo }) {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({
    title: "",
    rating: 0,
    ratingCount: 0,
    price: 0,
    features: [""],
    colors: [""],
    sizes: [""],
    description: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (productInfo) {
      setProduct(productInfo);
    }
  }, [productInfo]);

  const handleAddToCart = () => {
    dispatch(addProduct(product));
  };

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
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <button className="buy-now">Buy Now</button>
    </div>
  );
}

export default PurchaseBox;
