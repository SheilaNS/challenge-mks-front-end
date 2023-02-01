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

interface ActionAddProductProps {
  product: Product;
  quantity: number;
}

export default function ProductCard(props: ApiProduct) {
  const dispatch = useAppDispatch();

  function handleAddProduct(product: ActionAddProductProps) {
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
          className="cart-product-image"
        />
      </ImageContainer>
      <ProductTitle>
        <h3 className="cart-product-title">{props.name}</h3>
        <span className="cart-product-price">
          R${priceFormater(props.price)}
        </span>
      </ProductTitle>
      <p className="cart-product-description">Redesigned from scratch and completely revised.</p>
      <BuyButton
        onClick={() =>
          handleAddProduct({ product: { ...props, qtd: 1 }, quantity: 1 })
        }
      >
        <Image src={bag} alt="" className="buy-button-icon" />
        <span className="buy-button-title">COMPRAR</span>
      </BuyButton>
    </ProductCardContainer>
  );
}
