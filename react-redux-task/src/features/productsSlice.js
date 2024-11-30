import { createSlice } from "@reduxjs/toolkit";
import Products from "../data/Products"; // Import product data

const initialState = {
  products: Products,
  cardAmount: 0,
  cardQuantity: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateQuantity(state, action) {
      const { index, quantity, priceAfterDiscount } = action.payload;
      const oldQuantity = state.products[index].quantity || 0;
      state.products[index].quantity = quantity;

      state.cardQuantity += quantity - oldQuantity;
      state.cardAmount += (quantity - oldQuantity) * parseFloat(priceAfterDiscount);
    },
    removeProduct(state, action) {
      const index = action.payload;
      const product = state.products[index];
      state.cardQuantity -= product.quantity || 0;
      state.cardAmount -= product.quantity * (product.price - product.price * (product.discountPercentage / 100));
      state.products[index].quantity = 0;
    },
  },
});

export const { updateQuantity, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;
