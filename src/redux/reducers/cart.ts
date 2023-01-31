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
  items: [
    {
      id: 2,
      name: "AirPods",
      brand: "Apple",
      description:
        "Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
      price: "1200.00",
      createdAt: "2023-01-23T18:17:04.771Z",
      updatedAt: "2023-01-23T18:17:04.771Z",
      qtd: 1,
    },
  ],
  total: 1200,
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
      state.total = state.items.reduce(
        (acc, item) => acc + +item.price * item.qtd,
        0
      );
    },
    removeProductFromCart(state, action: PayloadAction<{ productId: string }>) {
      const productIndex = state.items.findIndex(
        (item) => item.id === +action.payload.productId
      );
      if (productIndex >= 0) {
        state.items.splice(productIndex, 1);
      }
      state.total = state.items.reduce(
        (acc, item) => acc + +item.price * item.qtd,
        0
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export function cartState(state: RootState) { return state.cart}
