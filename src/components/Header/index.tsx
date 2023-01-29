import Image from "next/image";
import { HeaderContainer, HeaderContent, CartButton } from "./styles";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart-icon.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={logo} alt="" />

        <CartButton>
          <Image src={cart} alt="" />
          <span>0</span>
        </CartButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
