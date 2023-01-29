import ProductCard from "@/components/ProductCard";
import { ProductContainer } from "./styles";

interface ProductProps {
  id: number;
  name: string;
  photo: string;
  price: string;
}

export default function Products() {
  return (
    <ProductContainer>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ProductContainer>
  );
}
