import { useSelector, useDispatch } from "react-redux";
import { addProduct, minusProduct, deleteProduct } from "../Redux/cartSlice.js";
import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.cartProduct);

  const handleDelete = (PID) => {
    dispatch(deleteProduct(PID));
  };

  const handleAddone = (PID) => {
    dispatch(addProduct(PID));
  };

  const handleMinusOne = (PID) => {
    dispatch(minusProduct(PID));
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1>Cart</h1>
          <p className="price-label">Price</p>
        </div>

        <div className="cart-items">
          {cartProduct.map((product) => (
            <div key={product.id} className="cart-item">
              <div className="item-image">
                <img
                  src={product.image || "https://via.placeholder.com/150"}
                  alt={product.title}
                />
              </div>

              <div className="item-details">
                <h2 className="item-title">{product.title}</h2>
                <div className="item-availability">In Stock</div>
                <div className="item-actions">
                  <div className="quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() => handleMinusOne(product.id)}
                    >
                      -
                    </button>
                    <span className="quantity-number">{product.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleAddone(product.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="action-buttons">
                    <button
                      className="action-button"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                    <button className="action-button">Save to Favorites</button>
                    <button className="action-button">Share</button>
                  </div>
                </div>
              </div>

              <div className="item-price">
                <span className="price">${product.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="subtotal">
            <span>Subtotal ({cartProduct.length} items):</span>
            <span className="subtotal-price">
              ${cartProduct.reduce((sum, item) => sum + item.price, 0)}
            </span>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>

      <div className="cart-sidebar">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal ({cartProduct.length} items):</span>
            <span>
              ${cartProduct.reduce((sum, item) => sum + item.price, 0)}
            </span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>
              ${cartProduct.reduce((sum, item) => sum + item.price, 0)}
            </span>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
