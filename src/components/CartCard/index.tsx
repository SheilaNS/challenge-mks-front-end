import { useAppDispatch } from "@/hooks";
import { Product, removeProductFromCart, updateProductQuantity } from "@/redux/reducers/cart";
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
      <Image src={props.photo} alt="" width={50} height={60} />
      <ProductName>{props.name}</ProductName>
      <ProductQuantity>
        <p>Qtd.</p>
        <div>
          <button
            onClick={() => handleUpdate({ product: {...props}, operator: 'sum' })}
          >
            <Plus size={10} />
          </button>
          <span>{props.qtd}</span>
          <button
            onClick={() => handleUpdate({ product: {...props}, operator: 'sub' })}
          >
            <Minus size={10} />
          </button>
        </div>
      </ProductQuantity>
      <ProductPrice>
        R${priceFormater((+props.price * +props.qtd).toString().concat(".00"))}
      </ProductPrice>
      <RemoveItemButton
        onClick={() => handleRemoveProduct({ productId: props.id.toString() })}
      >
        <X size={14} />
      </RemoveItemButton>
    </CartCardContainer>
  );
}
