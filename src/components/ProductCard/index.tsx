import { ImageContainer, ProductCardContainer, ProductTitle, BuyButton } from "./styles";
import Image from "next/image";
import bag from "../../assets/shopping-bag.svg";

interface ProductProps {
  id: number;
  name: string;
  photo: string;
  price: string;
}

export default function ProductCard({name, photo, price}: ProductProps) {
  return (
    <ProductCardContainer>
      <ImageContainer>
        <Image src={photo} alt={name} width={100} height={138} />
      </ImageContainer>
      <ProductTitle>
        <h3>{name}</h3>
        <span>R${price.split('.')[0]}</span>
      </ProductTitle>
      <p>Redesigned from scratch and completely revised.</p>
      <BuyButton>
        <Image src={bag} alt="" />
        <span>COMPRAR</span>
      </BuyButton>
    </ProductCardContainer>
  );
}
