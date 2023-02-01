import { useAppDispatch } from "@/hooks";
import {
  Product,
  removeProductFromCart,
  updateProductQuantity,
} from "@/redux/reducers/cart";
import { priceFormater } from "@/utils";
import Image from "next/image";
import { Minus, Plus, X } from "phosphor-react";
import {
  CartCardContainer,
  ProductName,
  ProductPrice,
  ProductQuantity,
  RemoveItemButton,
} from "./styles";

interface ActionRemoveProductProps {
  productId: string;
}

interface ActionUpdateProductProps {
  product: Product;
  operator: string;
}

export function CartCard(props: Product) {
  const dispatch = useAppDispatch();

  function handleRemoveProduct(id: ActionRemoveProductProps) {
    dispatch(removeProductFromCart(id));
  }

  function handleUpdate(updateInfo: ActionUpdateProductProps) {
    dispatch(updateProductQuantity(updateInfo));
  }

  return (
    <CartCardContainer>
      <div className="cart-card-image-container">
        <Image
          className="cart-product-image"
          src={props.photo}
          alt=""
          width={50}
          height={60}
        />
      </div>

      <ProductName>{props.name}</ProductName>

      <div className="cart-card-qtd-container">
        <ProductQuantity>
          <p className="cart-quantity-text">Qtd.</p>
          <div className="cart-product-quantity-control">
            <button
              className="cart-product-quantity-button left"
              onClick={() =>
                handleUpdate({ product: { ...props }, operator: "sum" })
              }
            >
              <Plus size={10} />
            </button>
            <span className="cart-product-quantity">{props.qtd}</span>
            <button
              className="cart-product-quantity-button right"
              onClick={() =>
                handleUpdate({ product: { ...props }, operator: "sub" })
              }
            >
              <Minus size={10} />
            </button>
          </div>
        </ProductQuantity>

        <ProductPrice>
          R$
          {priceFormater((+props.price * +props.qtd).toString().concat(".00"))}
        </ProductPrice>
      </div>

      <RemoveItemButton
        onClick={() => handleRemoveProduct({ productId: props.id.toString() })}
      >
        <X size={14} />
      </RemoveItemButton>
    </CartCardContainer>
  );
}
