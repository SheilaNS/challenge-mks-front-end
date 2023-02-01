import Image from "next/image";
import { HeaderContainer, HeaderContent, CartButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import logo from '../../assets/logo.svg';
import cartIcon from '../../assets/cart-icon.svg';
import { CartModal } from "../CartModal";
import { useAppSelector } from "@/hooks";
import { cartState } from "@/redux/reducers/cart";

export function Header() {
  const cart = useAppSelector(cartState);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Image className="logo" src={logo} alt='MKS Sistemas logo image' />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <CartButton>
            <Image className="cart-icon" src={cartIcon} alt="Cart icon" />
            <span className="cart-product-number">{cart.items.length}</span>
            </CartButton>
          </Dialog.Trigger>

          <CartModal />
        </Dialog.Root>

      </HeaderContent>
    </HeaderContainer>
  );
}
