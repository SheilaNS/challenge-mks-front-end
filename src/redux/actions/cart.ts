import { addProductToCart, removeProductFromCart, Product } from "../reducers/cart";

export const addToCart = (product: Product, quantity: number) =>
  addProductToCart({ product, quantity });
export const removeFromCart = (productId: string) =>
  removeProductFromCart({ productId });
