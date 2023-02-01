import { ApiProduct } from "@/@types/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

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

      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.qtd += quantity;
      } else {
        state.items.push({ ...product, qtd: quantity });
      }

      state.total = state.items.reduce(
        (acc, item) => acc + +item.price * item.qtd,
        0
      );
    },

    removeProductFromCart(state, action: PayloadAction<{ productId: string }>) {
      const { productId } = action.payload;
      const productIndex = state.items.findIndex(
        (item) => item.id === +productId
      );

      if (productIndex >= 0) {
        state.items.splice(productIndex, 1);
      }

      state.total = state.items.reduce(
        (acc, item) => acc + +item.price * item.qtd,
        0
      );
    },

    updateProductQuantity(state, action) {
      const { product, operator } = action.payload;

      const item = state.items.find((elem) => elem.id === product.id);

      if (+product.qtd === 1 && operator === "sub") {
        state.items = state.items.filter((elem) => elem.id !== product.id);
      } else {
        item!.qtd -= 1;
      }

      if (operator === "sum") {
        item!.qtd = product.qtd + 1;
      }

      state.total = state.items.reduce(
        (acc, item) => acc + +item.price * +item.qtd,
        0
      );
    },

    clearCart(state) {
      state.items = [];
      state.total = state.items.reduce(
        (acc, item) => acc + +item.price * item.qtd,
        0
      );
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  updateProductQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export function cartState(state: RootState) {
  return state.cart;
}
