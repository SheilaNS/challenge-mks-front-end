import { ApiProduct } from "@/@types/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product extends ApiProduct {
  qtd: number;
}

export interface CartState {
  items: Product[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, action) {
      const { product, quantity } = action.payload;
      console.log(product);
      console.log(quantity);
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.qtd += quantity;
      } else {
        state.items.push({ ...product, qtd: quantity });
      }
      state.total = state.items.reduce((acc, item) => acc + +item.price * item.qtd, 0);
    },
    removeProductFromCart(state, action: PayloadAction<{ productId: string }>) {
      const productIndex = state.items.findIndex((item) => item.id === +action.payload.productId);
      if (productIndex >= 0) {
        state.items.splice(productIndex, 1);
      }
      state.total = state.items.reduce((acc, item) => acc + +item.price * item.qtd, 0);
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
