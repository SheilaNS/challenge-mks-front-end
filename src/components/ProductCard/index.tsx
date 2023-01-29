import { ImageContainer, ProductCardContainer, ProductTitle, BuyButton } from "./styles";
import Image from "next/image";
import bag from "../../assets/shopping-bag.svg";
import phone from '../../assets/iphone-x.png';

export default function ProductCard() {
  return (
    <ProductCardContainer>
      <ImageContainer>
        <Image src={phone} alt='' />
      </ImageContainer>
      <ProductTitle>
        <h3>Apple iPhone X 128GB</h3>
        <span>R$899</span>
      </ProductTitle>
      <p>Redesigned from scratch and completely revised.</p>
      <BuyButton>
        <Image src={bag} alt="" />
        <span>COMPRAR</span>
      </BuyButton>
    </ProductCardContainer>
  );
}
