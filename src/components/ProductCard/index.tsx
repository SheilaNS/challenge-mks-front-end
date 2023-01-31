import {
  ImageContainer,
  ProductCardContainer,
  ProductTitle,
  BuyButton,
} from "./styles";
import Image from "next/image";
import bag from "../../assets/shopping-bag.svg";
import { priceFormater } from "@/utils";
import { useAppDispatch } from "@/hooks";
import { ApiProduct } from "@/@types/interfaces";
import { addProductToCart, Product } from "@/redux/reducers/cart";

interface ActionProductProps {
  product: Product;
  quantity: number;
}

export function ProductCard(props: ApiProduct) {
  const dispatch = useAppDispatch();

  function handleAddProduct(product: ActionProductProps) {
    dispatch(addProductToCart(product));
  }

  return (
    <ProductCardContainer>
      <ImageContainer>
        <Image
          src={props.photo}
          alt={props.name}
          width={100}
          height={138}
        />
      </ImageContainer>
      <ProductTitle>
        <h3>{props.name}</h3>
        <span>R${priceFormater(props.price)}</span>
      </ProductTitle>
      <p>Redesigned from scratch and completely revised.</p>
      <BuyButton onClick={() => handleAddProduct({product: {...props, qtd: 1}, quantity: 1})}>
        <Image src={bag} alt="" />
        <span>COMPRAR</span>
      </BuyButton>
    </ProductCardContainer>
  );
}
