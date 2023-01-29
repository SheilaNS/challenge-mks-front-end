import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CheckoutButton, CloseButton, Content, Overlay, Title, TotalContainer } from "./styles";

export function CartModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Title>Carrinho de compras</Title>

        <CloseButton>
          <X size={20} />
        </CloseButton>

        <TotalContainer>
          <p>Total:</p>
          <p>R$798</p>
        </TotalContainer>

        <CheckoutButton>Finalizar Compra</CheckoutButton>

      </Content>
    </Dialog.Portal>
  );
}
