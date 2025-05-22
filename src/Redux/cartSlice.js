import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart
    ? JSON.parse(savedCart)
    : {
        cartProduct: [
          {
            id: 1,
            title: "2024 new laptop 15.6 inches",
            price: 4999,
          },
          {
            id: 2,
            title: "wireless bluetooth headphones active noise cancellation",
            price: 899,
          },
        ],
      };
};

const cartReducer = createSlice({
  name: "cart",
  initialState: getInitialState(),
  reducers: {
    addProduct: (state, action) => {
      state.cartProduct = [...state.cartProduct, action.payload];
      localStorage.setItem("cart", JSON.stringify(state));
    },
    deleteProduct: (state, action) => {},
  },
});

export const { addProduct, deleteProduct } = cartReducer.actions;
export default cartReducer.reducer;
