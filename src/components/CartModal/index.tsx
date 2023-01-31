import { useAppSelector } from "@/hooks";
import { cartState } from "@/redux/reducers/cart";
import { priceFormater } from "@/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CartCard } from "../CartCard";
import {
  CheckoutButton,
  CloseButton,
  Content,
  Overlay,
  Title,
  TotalContainer,
} from "./styles";

export function CartModal() {
  const cart = useAppSelector(cartState);

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Title>Carrinho de compras</Title>

        <CloseButton>
          <X size={20} />
        </CloseButton>

        {cart.items.length === 0 ? (
          <h3>Seu carrinho está vazio.</h3>
        ) : (
          cart.items.map((elem) => <CartCard key={elem.id} {...elem} />)
        )}

        <TotalContainer>
          <p>Total:</p>
          <p>R${priceFormater(cart.total.toString().concat(".00"))}</p>
        </TotalContainer>

        <CheckoutButton>Finalizar Compra</CheckoutButton>
      </Content>
    </Dialog.Portal>
  );
}
