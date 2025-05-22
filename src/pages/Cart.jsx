import { useSelector } from "react-redux";

function Cart() {
  const cartProduct = useSelector((state) => state.cart.cartProduct);
  return (
    <div>
      {cartProduct.map((product) => {
        return <div key={product.id}>{product.title}</div>;
      })}
    </div>
  );
}

export default Cart;
