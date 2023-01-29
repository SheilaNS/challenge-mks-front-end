import Image from "next/image";
import { HeaderContainer, HeaderContent, CartButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import logo from '../../assets/logo.svg';
import cart from '../../assets/cart-icon.svg';
import { CartModal } from "../CartModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={logo} alt='' />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <CartButton>
            <Image src={cart} alt="" />
            <span>0</span>
            </CartButton>
          </Dialog.Trigger>

          <CartModal />
        </Dialog.Root>

      </HeaderContent>
    </HeaderContainer>
  );
}
