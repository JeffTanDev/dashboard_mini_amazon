import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart
    ? JSON.parse(savedCart)
    : {
        cartProduct: [],
      };
};

const cartReducer = createSlice({
  name: "cart",
  initialState: getInitialState(),
  reducers: {
    addProduct: (state, action) => {
      const existProduct = state.cartProduct.find((product) => {
        return product.id === action.payload;
      });
      if (existProduct) {
        existProduct.quantity += 1;
      } else {
        const newProduct = {
          ...action.payload,
          quantity: 1,
        };
        state.cartProduct = [...state.cartProduct, newProduct];
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    minusProduct: (state, action) => {
      const existProduct = state.cartProduct.find((product) => {
        return product.id === action.payload;
      });
      if (existProduct.quantity > 1) {
        existProduct.quantity -= 1;
      } else {
        state.cartProduct = state.cartProduct.filter(
          (p) => p.id !== existProduct.id
        );
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    deleteProduct: (state, action) => {
      state.cartProduct = state.cartProduct.filter(
        (p) => p.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addProduct, minusProduct, deleteProduct } = cartReducer.actions;
export default cartReducer.reducer;
